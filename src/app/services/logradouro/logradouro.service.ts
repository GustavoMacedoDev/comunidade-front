import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogradouroService {

  private readonly PATH: string = 'logradouros/';

  constructor(private httpClient: HttpClient) { }

  listaLogradouro(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  cadastrarLogradouro(logradouro:any): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, logradouro);
  }

  editaLogradouro(idLogradouro:any, logradouro:any): Observable<any> {
    return this.httpClient.put(env.baseUrl + this.PATH + idLogradouro, logradouro);
  }

  deletaLogradouro(idLogradouro:any): Observable<any> {
    return this.httpClient.delete(env.baseUrl + this.PATH + idLogradouro);
  }
}
