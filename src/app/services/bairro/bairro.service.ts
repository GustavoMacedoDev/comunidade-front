import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BairroService {

  private readonly PATH: string = 'bairro/';

  constructor(
    private httpClient: HttpClient
    ) { }

  listaBairros(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  cadastrarBairro(bairro: string): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, bairro);
  }

  editaBairro(idBairro: number, nomeBairro: string): Observable<any> {
    return this.httpClient.put(env.baseUrl + this.PATH + idBairro, nomeBairro);
  }

  deletaBairro(idBairro:any): Observable<any>{
    return this.httpClient.delete(env.baseUrl + this.PATH + idBairro);
  }
}