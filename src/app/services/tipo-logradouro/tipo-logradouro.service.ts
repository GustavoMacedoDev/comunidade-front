import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoLogradouroService {

  private readonly PATH: string = 'tipologradouro/';

  constructor(private httpClient: HttpClient) { }

  listaTipoLogradouro(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  cadastrarTipo(tipo:any): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, tipo);
  }

  editaTipo(idTipo:any, tipo:any): Observable<any> {
    return this.httpClient.put(env.baseUrl + this.PATH + idTipo, tipo);
  }

  deletaTipo(idTipo:any): Observable<any> {
    return this.httpClient.delete(env.baseUrl + this.PATH + idTipo);
  }
}
