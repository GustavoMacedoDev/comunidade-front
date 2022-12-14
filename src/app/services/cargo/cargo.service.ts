import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListaCargoDto } from 'src/app/shared/interfaces/cargos/lista-cargos.dto';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private readonly PATH: string = 'cargos/';

  constructor(private httpClient: HttpClient) { }

  listaCargos(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH);
  }

  cadastrarCargo(cargo: string): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, cargo);
  }

  editaCargo(idCargo: number, nomeCargo: string): Observable<any> {
    return this.httpClient.put(env.baseUrl + this.PATH + idCargo, nomeCargo);
  }

  deletaCargo(idCargo:any): Observable<any>{
    return this.httpClient.delete(env.baseUrl + this.PATH + idCargo);
  }
}
