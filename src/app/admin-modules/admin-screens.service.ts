import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Screen } from './modules-screens/screens-overzicht/screen-item/screen-item.model';

@Injectable({ providedIn: 'root' })
export class AdminScreensService {

  public constructor(private readonly httpClient: HttpClient) {
  }

  public getScreens(): Observable<Screen[]> {
    // return this.httpClient.get<Screen[]>('https://baseurl/api');
    return of(this.createScreens());
  }

  private createScreens(): Screen[] {
    const screens: Screen[] = [];

    for (let i = 0; i < 10; i++) {
      screens.push({
        title: 'Vraag titel' + i,
        theory: 'Theorie',
        question: 'Vraag',
        id: ''
      });
    }
    return screens;
  }

}
