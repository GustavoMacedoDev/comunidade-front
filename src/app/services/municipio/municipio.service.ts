import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  private readonly PATH: string = 'municipio/';

  constructor(
    private httpClient: HttpClient
    ) { }

  listaMunicipios(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }
}