/* tslint:disable:no-string-literal */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from 'src/app/ppp-components/three-dot-button/menu-item.model';
import { PppSnackerService } from '../../../ppp-services/ppp-snacker.service';
import { AdminKlassenService } from '../../admin-klassen.service';
import { AdminStudentenService } from '../../admin-studenten-service.service';
import { Student } from '../../studenten-item.model';


@Component({
  selector: 'klassen-studenten-overzicht-wrapper',
  templateUrl: './klassen-studenten-overzicht-wrapper.component.html',
  styleUrls: ['./klassen-studenten-overzicht-wrapper.component.css']
})
export class KlassenStudentenOverzichtWrapperComponent implements OnInit, OnDestroy {

  public studenten: Student[] = [];
  public klasNaam: string;
  public klasId: string;
  private readonly subscription: Subscription = new Subscription();

  constructor(private studentenService: AdminStudentenService,
              private router: Router,
              private route: ActivatedRoute,
              private adminKlassenService: AdminKlassenService,
              private snackBar: PppSnackerService) {
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
          next: studenten => this.studenten = studenten,
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

  public menuItemClicked(menuItem: MenuItem): void {
    if (menuItem.isRoute) {
      this.router.navigate([menuItem.routeOrID], {state: {klasNaam: this.klasNaam}});
    } else {
      this.deleteStudent(menuItem.routeOrID);
      // todo implement snackbar, loading and delete
      // this.studentenService.deleteStudent(menuItem.routeOrID);
    }
  }
}
