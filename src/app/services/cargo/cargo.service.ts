import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private readonly PATH: string = 'cargos';

  constructor(private httpClient: HttpClient) { }

  listaCargos(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }
}
