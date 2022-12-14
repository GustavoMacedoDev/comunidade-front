import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private readonly PATH: string = '/perfil/';

  constructor(private httpClient: HttpClient) { }

  cadastraPerfil(perfil: any): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, perfil);
  }
  listaPerfil(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  listaPerfilPorId(idPerfil: string): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH + idPerfil);
  }

  alteraPerfil(idPerfil: string, perfil: string): Observable<any> {
    return this.httpClient.put(env.baseUrl + this.PATH + idPerfil, perfil);
  }

  deletaPerfil(idPerfil: string): Observable<any> {
    return this.httpClient.delete(env.baseUrl + this.PATH + idPerfil);
  }
}
