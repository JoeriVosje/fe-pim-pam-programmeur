import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Sessie } from '../../models/sessie.model';
import { Student } from '../../models/student.model';
import { StudentModulesNavigation } from '../../student-modules.navigation';
import { StudentModulesService } from '../../student-modules.service';

@Component({
  selector: 'student-start-wrapper',
  templateUrl: './start.wrapper.component.html'
})
export class StartWrapperComponent implements OnInit, OnDestroy {

  public student: Student;
  public sessie: Sessie;
  public isLoading: boolean;

  private readonly subscription: Subscription = new Subscription();

  constructor(
    private readonly navigatie: StudentModulesNavigation,
    private readonly service: StudentModulesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadStudent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadStudent(): void {
    this.subscription.add(
      this.service.getStudent()
        .subscribe({
          next: student => this.student = student,
          error: err => console.log(err),
          complete: () => this.loadSessie(this.student.classroom.module.id)
        })
    );
  }

  private loadSessie(moduleId: string): void {
    this.subscription.add(
      this.service.getSession(moduleId)
        .subscribe({
          next: sessie => this.sessie = sessie,
          error: err => console.log(err),
          complete: () => this.isLoading = false
        })
    );
  }

  public canStartModule(): boolean {
    return !this.sessie.endTime;
  }

  public naarSchermen(): void {
    this.navigatie.naarSchermen();
  }

}
