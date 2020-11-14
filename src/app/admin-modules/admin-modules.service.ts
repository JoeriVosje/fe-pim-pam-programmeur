import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Module } from './modules-overzicht/modules-item/modules-item.model';

@Injectable({ providedIn: 'root' })
export class AdminModulesService {

  private baseurl = "https://be-pim-pam-programmeur.azurewebsites.net/api";


  public constructor(private readonly httpClient: HttpClient) {
  }

  public getModules(): Observable<Module[]> {
    return this.httpClient.get<Module[]>(`${this.baseurl}/module`);
  }

  public getModule(id: string): Observable<Module> {
    return this.httpClient.get<Module>(`${this.baseurl}/module/${id}`);
  }

  public saveModule(moduleName: string): Observable<HttpResponse<void>> {
    return this.httpClient.post<void>(`${this.baseurl}/module`, { name: moduleName }, {
      observe: 'response'
    });
  }

  public updateModule(moduleId: string, moduleName: string): Observable<HttpResponse<void>> {
    return this.httpClient.put<void>(`${this.baseurl}/module/`, { id: moduleId, name: moduleName }, {
      observe: 'response'
    });
  }
}
