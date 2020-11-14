/* tslint:disable:no-string-literal */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MenuItem } from 'src/app/ppp-components/three-dot-button/menu-item.model';
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
              private adminKlassenService: AdminKlassenService) {
  }

  async ngOnInit(): Promise<void> {
    this.klasId = this.route.snapshot.paramMap.get('id');
    this.klasNaam = await this.adminKlassenService.getKlas(this.klasId).toPromise().then(value => value.name);
    this.subscription.add(
      this.studentenService.getStudenten(this.klasId)
        .subscribe({
          next: studenten => this.studenten = studenten,
          error: error => console.log(error),
          complete: () => {
            console.log(this.studenten);
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toevoegenClicked(): void {
    this.router.navigate([`classes/${this.klasId}/students/add`]);
  }

  public menuItemClicked(menuItem: MenuItem): void {
    if (menuItem.isRoute) {
      this.router.navigate([menuItem.data], {state: {klasNaam: this.klasNaam}});
    } else {
      // todo implement delete student
    }
  }
}
