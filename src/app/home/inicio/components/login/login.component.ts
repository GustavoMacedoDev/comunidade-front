import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { ILoginDto } from 'src/app/shared/interfaces/login/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.geraForm();
  }

  geraForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if(this.form.invalid) {
      return;
    }
    
    const login: ILoginDto = this.form.value;

    this.loginService.login(login).
      subscribe({
        next: res =>{
          localStorage['token'] = res['token']['token'];

          const usuarioData = JSON.parse(atob(localStorage['token'].split('.')[1]));

          if (usuarioData['groups'] == 'admin') {
            this.router.navigate(['/inicio']);
          }
            
        },
        error: (erro) =>{
          const msg : string = "Usuário ou senha incorretos";
          this.snackBar.open(msg, "Erro", {duration: 3000});
        }
      });

      return false;

  }

}
