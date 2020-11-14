import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Klas } from './klassen-item.model';
import { KlasRequest } from './klassen-request.model';


@Injectable({ providedIn: 'root' })
export class AdminKlassenService {

  private baseurl = "https://be-pim-pam-programmeur.azurewebsites.net/api";


  public constructor(private readonly httpClient: HttpClient) {
  }

  public getKlassen(): Observable<Klas[]> {
    return this.httpClient.get<Klas[]>(`${this.baseurl}/classroom`);
  }

  public getKlas(id: string): Observable<Klas> {
    return this.httpClient.get<Klas>(`${this.baseurl}/classroom/${id}`);
  }

  public saveKlas(klasInput: KlasRequest): Observable<HttpResponse<void>> {
    return this.httpClient.post<void>(`${this.baseurl}/classroom`, klasInput, {
      observe: 'response'
    });
  }
}
