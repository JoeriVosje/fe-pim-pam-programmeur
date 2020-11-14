import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
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
    return of(this.createQuestions());
  }

  private createQuestions(): Question[] {
    const questions: Question[] = [
      {
        id: '123',
        title: 'q1',
        theory: 'Dit is uitleg',
        question: 'Dit is het antwoord',
        skippable: false,
        hint: 'hint, hint',
        moduleId: '123',
        answers: [
          {
            id: '123',
            description: 'Dit is een omschrijving van de vraag'
          },
          {
            id: '456',
            description: 'Volgende description'
          }
          ]
      },
      {
        id: '456',
        title: 'q2',
        theory: 'Dit is uitleg',
        skippable: false,
        moduleId: '123',
        answers: [
          {
            id: '123',
            description: 'Dit is een omschrijving van de vraag'
          },
          {
            id: '456',
            description: 'Volgende description'
          }
        ]
      },
      {
        id: '789',
        title: 'q3',
        question: 'Dit is het antwoord',
        skippable: false,
        moduleId: '123',
        answers: [
          {
            id: '123',
            description: 'Dit is een omschrijving van de vraag'
          },
          {
            id: '456',
            description: 'Volgende description'
          }
        ]
      }
    ];
    return questions;
  }
}

