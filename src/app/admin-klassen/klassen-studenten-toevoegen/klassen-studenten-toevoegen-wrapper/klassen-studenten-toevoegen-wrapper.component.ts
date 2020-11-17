import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { PppSnackerService } from '../../../ppp-services/ppp-snacker.service';
import { AdminStudentenService } from '../../admin-studenten-service.service';
import { StudentRequest } from '../../studenten-request.model';

@Component({
  selector: 'klassen-studenten-toevoegen-wrapper',
  templateUrl: './klassen-studenten-toevoegen-wrapper.component.html',
  styleUrls: ['./klassen-studenten-toevoegen-wrapper.component.css']
})
export class KlassenStudentenToevoegenWrapperComponent implements OnInit, OnDestroy {

  mySubscription;
  loading: boolean;

  constructor(private service: AdminStudentenService, private router: Router, private snackBar: PppSnackerService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    this.loading = false;
  }

  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  addStudent(student: StudentRequest): void {
    if (student.firstName != null && student.lastName != null && student.email != null) {
      if (this.loading === false) {
        this.loading = true;
        this.service.saveStudent(student).subscribe({
          error: error => {
            this.snackBar.showErGingIetsMis(error);
            this.loading = false;
          },
          complete: () => {
            this.router.navigate([this.router.url]);
            this.snackBar.showToegevoegd('Student');
            this.loading = false;
          }
        });
      }
    } else {
      this.snackBar.showError('Oeps, alle velden invullen aub!');
    }
  }
}
