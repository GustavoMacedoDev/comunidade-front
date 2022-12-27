import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil/perfil.service';

@Component({
  selector: 'app-cadastra-perfil',
  templateUrl: './cadastra-perfil.component.html',
  styleUrls: ['./cadastra-perfil.component.css']
})
export class CadastraPerfilComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private perfilService: PerfilService,
    public dialogRef: MatDialogRef<CadastraPerfilComponent>,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.geraForm();
  }

  geraForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required]
    });
  }
  onCancel() {
    this.dialogRef.close();
  }

  cadastrarPerfil() {
    if(this.form.invalid) {
      return;
    }

    const perfil = this.form.value;
    this.perfilService.cadastraPerfil(perfil)
      .subscribe({
        next: res => {
          const msg: string = res.mensagem;
          this.snackBar.open(msg, "Sucesso", {duration: 3000});
          this.dialogRef.close();
          window.location.reload();
        },
        error: (erro) => {
          const msg: string = erro.error.mensagem;
          this.snackBar.open(msg, "Erro", {duration: 3000});
          this.onCancel();
        }
      });

      return false;

  }

}
