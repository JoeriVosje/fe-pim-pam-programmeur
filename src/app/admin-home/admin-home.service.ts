import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Sessie } from './sessies-overzicht/sessies-item/sessies-item.model';

@Injectable({ providedIn: 'root' })
export class AdminHomeService {

  public constructor(private readonly httpClient: HttpClient) {
  }

  public getSessies(): Observable<Sessie[]> {
    // return this.httpClient.get<Sessie[]>('https://baseurl/api');
    return of(this.createSessies());
  }

  private createSessies(): Sessie[] {
    const sessies: Sessie[] = [];

    for (let i = 0; i < 5; i++) {
      sessies.push({
        id: i.toString(),
        module: {
          moduleId: 'allo',
          moduleName: 'Sessie naam',
          creationDate: '2020-11-12T23:45'
        },
        studentsFinished: '5',
        studentsTotal: '20',
        timeStarted: '2020-11-12T23:45',
        timeFinished: '2020-11-12T23:45'
      });
    }
    return sessies;
  }

}