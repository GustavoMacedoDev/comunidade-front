import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembroService {

  private readonly PATH: string = 'membros/';
  private readonly PATHVINCULAR: string = 'membros/vincular';

  constructor(public httpClient: HttpClient) { }

  listaMembros():Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  listaDadosMembrosParaVinculacao(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHVINCULAR);
  }

  cadastraMembros(membro:any): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, membro);
  }

  detalhaMembro(idMembro:any): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH + idMembro);
  }
}
