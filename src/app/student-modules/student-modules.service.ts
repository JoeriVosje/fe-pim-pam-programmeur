import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Result } from './models/result.model';
import { Feedback, Screen } from './models/screen.model';
import { Session } from './models/session.model';
import { Skip } from './models/skip';
import { Student } from './models/student.model';

@Injectable({providedIn: 'root'})
export class StudentModulesService {

  private readonly baseUrl: string = 'https://be-pim-pam-programmeur.azurewebsites.net/api/';

  private moduleId: string;
  private sessionId: string;
  private userId: string;

  public constructor(private readonly http: HttpClient) { }

  public getStudent(): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}User/current`).pipe(
      tap(student => this.moduleId = student.classroom.module.id),
      tap(student => this.userId = student.id)
    );
  }

  public getSession(moduleId: string): Observable<Session> {
    return this.http.get<Session[]>(`${this.baseUrl}Session`, {
      params: { moduleId }
    }).pipe(
      map( sessions => {
        const session = sessions[sessions.length - 1];
        return !sessions ? null : session.endTime ? null : session;
      }),
      tap(session => session ? this.sessionId = session.sessionId : null)
    );
  }

  public getScreens(): Observable<Screen[]> {
    return this.http.get<Screen[]>(`${this.baseUrl}Component/module/${this.moduleId}`);
  }

  public sendAnswer(result: Result): Observable<Feedback> {
    console.log(result);
    // return this.http.post<Feedback>(`${this.baseUrl}Result`, result);
    return of({success: true, hint: 'Dit is een hint'});
  }

  public skipQuestion(skip: Skip): Observable<HttpResponse<void>> {
    return this.http.post<void>(`${this.baseUrl}Result/skip`, skip, {
        observe: 'response'
      });
  }

  public getModuleId(): string {
    return this.moduleId;
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public getUserId(): string {
    return this.userId;
  }
}

