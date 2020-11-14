import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Sessie } from './models/sessie.model';
import { Student } from './models/student.model';

@Injectable({providedIn: 'root'})
export class StudentModulesService {

  private readonly baseUrl: string = 'https://be-pim-pam-programmeur.azurewebsites.net/api/';

  public constructor(private readonly http: HttpClient) { }

  public getStudent(): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}User/current`);
  }

  public getSession(moduleId: string): Observable<Sessie> {
    return this.http.get<Sessie>(`${this.baseUrl}Session`, {
      params: { moduleId }
    });
  }
}

