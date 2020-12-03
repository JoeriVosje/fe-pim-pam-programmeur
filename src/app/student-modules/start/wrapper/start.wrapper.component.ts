import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Session, SessionStatus } from '../../models/session.model';
import { Student } from '../../models/student.model';
import { StudentModulesNavigation } from '../../student-modules.navigation';
import { StudentModulesService } from '../../student-modules.service';

@Component({
  selector: 'student-start-wrapper',
  templateUrl: './start.wrapper.component.html'
})
export class StartWrapperComponent implements OnInit, OnDestroy {

  public student: Student;
  public session: Session;
  public sessionStatus: SessionStatus;
  public isLoading: boolean;

  private readonly subscription: Subscription = new Subscription();
  private buttonText: string;

  constructor(
    private readonly navigatie: StudentModulesNavigation,
    private readonly service: StudentModulesService
  ) { }

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
          error: error => {
            console.log(error);
            this.isLoading = false;
          },
          complete: () => this.loadSession(this.student.classroom.module.id)
        })
    );
  }

  private loadSessionInfo(){
    this.subscription.add(
      this.service.getSessionStatus()
        .subscribe({
          next: status => {
            this.buttonText = status.lastAnsweredComponent == null ? 'Start module' : 'Hervat module'
            this.sessionStatus = status
          },
          error: error => {
            console.log(error);
            this.isLoading = false;
          },
          complete: () => this.isLoading = false
        })
    );
  }

  private loadSession(moduleId: string): void {
    this.subscription.add(
      this.service.getSession(moduleId)
        .subscribe({
          next: session => this.session = session,
          error: error => {
            console.log(error);
            this.isLoading = false;
          },
          complete: () => this.loadSessionInfo()
        })
    );
  }

  public canStartModule(): boolean {
    if(!this.sessionStatus || this.sessionStatus.finished){
      return false;
    }

    return !!this.session;
  }

  public getButtonText(): string {
    return this.buttonText;
  }

  public naarSchermen(): void {
    this.navigatie.toScreens(this.sessionStatus.lastAnsweredComponent);
  }

}
