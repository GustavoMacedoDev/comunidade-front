import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MinisterioService {

  private readonly PATH: string = 'ministerios';

  constructor(
    private httpClient: HttpClient
    ) { }

    listaMinisterios(): Observable<any> {
      return this.httpClient.get(env.baseUrl + this.PATH ); 
    }
  }