import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MinisterioService {

  private readonly PATH: string = 'ministerios/';
  private readonly PATHID: string = 'ministerios/detalha/';

  constructor(
    private httpClient: HttpClient
    ) { }

    listaMinisterios(): Observable<any> {
      return this.httpClient.get(env.baseUrl + this.PATH ); 
    }

    cadastraMinisterio(ministerio: any): Observable<any> {
      return this.httpClient.post(env.baseUrl + this.PATH, ministerio);
    }

    listaMinisterioPorId(idMinisterio: any): Observable<any> {
      
      return this.httpClient.get(env.baseUrl + this.PATHID + idMinisterio);
    }

    deletaMinisterio(idMinisterio: string): Observable<any>{
      return this.httpClient.delete(env.baseUrl + this.PATH + idMinisterio);
    }

  }