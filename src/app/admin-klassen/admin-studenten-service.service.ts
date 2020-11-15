import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from './studenten-item.model';
import { StudentRequest } from './studenten-request.model';

@Injectable({providedIn: 'root'})
export class AdminStudentenService {

  private baseUrl = 'https://be-pim-pam-programmeur.azurewebsites.net/api';
  private baseEndpoint = '/user';
  private classroomParam = '?classroomId=';

  public constructor(private readonly httpClient: HttpClient) {
  }

  public getStudenten(id: string): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseUrl}${this.baseEndpoint}${this.classroomParam}${id}`);
  }

  public getStudent(id: string): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseUrl}${this.baseEndpoint}/${id}`);
  }

  public saveStudent(studentRequest: StudentRequest): Observable<HttpResponse<void>> {
    return this.httpClient.post<void>(`${this.baseUrl}${this.baseEndpoint}`, studentRequest, {
      observe: 'response'
    });
  }

  public deleteStudent(id: string): Observable<HttpResponse<void>> {
    return this.httpClient.delete<void>(`${this.baseUrl}${this.baseEndpoint}/${id}`, {
      observe: 'response'
    });
  }
}
