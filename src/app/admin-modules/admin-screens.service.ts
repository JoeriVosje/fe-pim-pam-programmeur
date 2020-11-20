import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { OrderListItem, Screen } from './schermen-overzicht/scherm-item/scherm-item.model';

@Injectable({ providedIn: 'root' })
export class AdminScreensService {

  private baseurl = 'https://be-pim-pam-programmeur.azurewebsites.net/api';

  public constructor(private readonly httpClient: HttpClient) {
  }

  public getScreens(moduleId: string): Observable<Screen[]> {
    return this.httpClient.get<Screen[]>(`${this.baseurl}/Component/module/${moduleId}` );
  }

  public saveScreen(screen: Screen): Observable<HttpResponse<Screen>> {
    return this.httpClient.post<Screen>(`${this.baseurl}/Component/`, screen, { observe: 'response' });
  }

  public reOrderScreen(screens: OrderListItem): Observable<HttpResponse<Screen[]>> {
    return this.httpClient.put<Screen[]>(`${this.baseurl}/Component/Order`, screens, { observe: 'response' });
  }

  deleteScreen(screenId: string): Observable<HttpResponse<void>> {
    return this.httpClient.delete<void>(`${this.baseurl}/Component/${screenId}`, { observe: 'response' });
  }
}
