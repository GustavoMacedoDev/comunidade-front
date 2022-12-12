import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginDto } from 'src/app/shared/interfaces/login/login.dto';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly PATH: string = 'auth';

  constructor(public httpClient: HttpClient) { }

  login(login: ILoginDto):Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATH, login);
  }
}
