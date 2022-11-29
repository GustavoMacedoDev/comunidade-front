import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private readonly PATH: string = '/perfil';

  constructor(private httpClient: HttpClient) { }

  listaPerfil(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }
}
