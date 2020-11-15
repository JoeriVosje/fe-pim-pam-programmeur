import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationEnd, Router } from '@angular/router';

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

  constructor(private service: AdminStudentenService, private router: Router, private snackBar: MatSnackBar) {
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
          next: e => console.log(e),
          error: error => {
            console.log(error);
            this.snackBar.open('Er ging iets mis, probeer het later opnieuw!', '🥵', {
              announcementMessage: 'wtf',
              duration: 4000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['snackbar', 'error']
            });
            this.loading = false;
          },
          complete: () => {
            this.router.navigate([this.router.url]);
            this.snackBar.open('Student toegevoegd!', '🎉', {
              announcementMessage: 'wtf',
              duration: 4000,
              horizontalPosition: 'end',
              verticalPosition: 'top',
              panelClass: ['snackbar']
            });
            this.loading = false;
          }
        });
      }
    } else {
      this.snackBar.open('Oeps, alle velden invullen aub!', '✋', {
        announcementMessage: 'wtf',
        duration: 4000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['snackbar', 'error']
      });
    }
  }
}
