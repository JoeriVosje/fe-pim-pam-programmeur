/* tslint:disable:no-string-literal */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from 'src/app/ppp-components/three-dot-button/menu-item.model';
import { PppSnackerService } from '../../../ppp-services/ppp-snacker.service';
import { AdminKlassenService } from '../../admin-klassen.service';
import { AdminStudentenService } from '../../admin-studenten-service.service';
import { Student } from '../../studenten-item.model';
import {ModalComponent} from '../../../ppp-components/modal/modal.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'klassen-studenten-overzicht-wrapper',
  templateUrl: './klassen-studenten-overzicht-wrapper.component.html',
  styleUrls: ['./klassen-studenten-overzicht-wrapper.component.css']
})
export class KlassenStudentenOverzichtWrapperComponent implements OnInit, OnDestroy {

  public studenten: Student[] = [];
  public klasNaam: string;
  public klasId: string;
  public loaded = false;
  private readonly subscription: Subscription = new Subscription();

  constructor(private studentenService: AdminStudentenService,
              private router: Router,
              private route: ActivatedRoute,
              private adminKlassenService: AdminKlassenService,
              private snackBar: PppSnackerService,
              private readonly modal: MatDialog) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  async ngOnInit(): Promise<void> {
    this.klasId = this.route.snapshot.paramMap.get('id');
    this.klasNaam = await this.adminKlassenService.getKlas(this.klasId).toPromise().then(value => value.name);
    this.subscription.add(
      this.studentenService.getStudenten(this.klasId)
        .subscribe({
          next: studenten => {
            this.loaded = true;
            this.studenten = studenten;
          },
          error: error => this.snackBar.showErGingIetsMis(error)
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toevoegenClicked(): void {
    this.router.navigate([`classes/${this.klasId}/students/add`]);
  }

  deleteStudent(studentId: string): void {
    const modal = this.modal.open(ModalComponent, {
      width: '368px',
      data: {
        title: 'Weet je het zeker?',
        text: 'Wet je zeker dat je deze student wilt verwijderen?',
        buttonText1: 'Verwijderen',
        buttonText2: 'Annuleren'
      }
    });

    modal.afterClosed().subscribe(result => {
      if (result?.data) {
        this.studentenService.deleteStudent(studentId).subscribe(
          {
            error: error => this.snackBar.showErGingIetsMis(error),
            complete: () => {
              this.snackBar.showVerwijderd('Student');
              this.router.navigate([this.router.url]);
            }
          }
        );
      }
    });
  }

  public menuItemClicked(menuItem: MenuItem): void {
    if (menuItem.isRoute) {
      this.router.navigate([menuItem.routeOrID]);
    } else {
      this.deleteStudent(menuItem.routeOrID);
      // todo implement snackbar, loading and delete
      // this.studentenService.deleteStudent(menuItem.routeOrID);
    }
  }
}
