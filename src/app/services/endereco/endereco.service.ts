import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private readonly PATH: string = 'endereco/';

  constructor(public httpClient: HttpClient) { }

  listaEnderecoPorIdMembro(idMembro:any): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH + idMembro);
  }
}
