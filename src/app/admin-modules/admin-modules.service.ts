import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Module } from './modules-overzicht/modules-item/modules-item.model';

@Injectable({ providedIn: 'root' })
export class AdminModulesService {

  public constructor(private readonly httpClient: HttpClient) {
  }

  public getModules(): Observable<Module[]> {
    // return this.httpClient.get<Module[]>('https://baseurl/api');
    return of(this.createModules());
  }

  public saveModule(moduleName: string): Observable<HttpResponse<void>> {
    // return this.httpClient.post<void>('url', moduleName, {
    //   observe: 'response'
    // });
    return of(new HttpResponse<void>());
  }

  private createModules(): Module[] {
    const modules: Module[] = [];

    for (let i = 0; i < 10; i++) {
      modules.push({
        name: 'Module naam',
        status: true,
        dateAdded: '2020-11-07'
      });
    }
    return modules;
  }
}
