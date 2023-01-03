import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly PATH: string = 'contato/';

  constructor(public httpClient: HttpClient) { }

  listaContatosPorIdMembro(idMembro: any): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH + idMembro);
  }
}
