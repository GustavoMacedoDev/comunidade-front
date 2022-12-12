import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembroMinisterioService {

  private readonly PATH: string = "/membro-ministerio/";

  constructor(private httpClient: HttpClient) { }

  cadastraMembroMinisterio(membro:any): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, membro);
  }

  listaMembrosPorMinisterio(idMinisterio:any): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH + idMinisterio);
  }
}
