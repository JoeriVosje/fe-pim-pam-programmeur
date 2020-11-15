import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Question } from './models/question.model';
import { Session } from './models/session.model';
import { Student } from './models/student.model';

@Injectable({providedIn: 'root'})
export class StudentModulesService {

  private readonly baseUrl: string = 'https://be-pim-pam-programmeur.azurewebsites.net/api/';

  private moduleId: string;
  private sessionId: string;

  public constructor(private readonly http: HttpClient) { }

  public getStudent(): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}User/current`).pipe(
      tap(student => this.moduleId = student.classroom.module.id)
    );
  }

  public getSession(moduleId: string): Observable<Session> {
    return this.http.get<Session[]>(`${this.baseUrl}Session`, {
      params: { moduleId }
    }).pipe(
      map( session => session.length > 0 ? session[session.length - 1] : null),
      tap(session => this.sessionId = session.sessionId)
    );
  }

  public getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.baseUrl}Component/module/${this.moduleId}`);
  }
}

