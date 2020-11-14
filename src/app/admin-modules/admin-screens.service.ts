import {HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Screen } from './screens-overzicht/screen-item/screen-item.model';

@Injectable({ providedIn: 'root' })
export class AdminScreensService {

  private baseurl = 'https://be-pim-pam-programmeur.azurewebsites.net/api';

  public constructor(private readonly httpClient: HttpClient) {
  }

  public getScreens(): Observable<Screen[]> {
    // return this.httpClient.get<Screen[]>('https://baseurl/api');
    return of(this.createScreens());
  }

  public saveScreen(screen: Screen): Observable<HttpResponse<Screen>> {
    return this.httpClient.post<Screen>(`${this.baseurl}/Component/`, screen, { observe: 'response' });
  }

  private createScreens(): Screen[] {
    const screens: Screen[] = [];

    for (let i = 0; i < 10; i++) {
      screens.push({
        title: 'Vraag titel' + i,
        theory: 'Theorie',
        question: 'Vraag',
        moduleId: '',
      });
    }
    return screens;
  }

}
