import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TipoLogradouroService } from 'src/app/services/tipo-logradouro/tipo-logradouro.service';

@Component({
  selector: 'app-cadastra-tipo',
  templateUrl: './cadastra-tipo.component.html',
  styleUrls: ['./cadastra-tipo.component.css']
})
export class CadastraTipoComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public tipoService: TipoLogradouroService,
    public dialogRef: MatDialogRef<CadastraTipoComponent>,
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

  cadastrarTipo() {
    if(this.form.invalid) {
      return;
    }

    const tipo = this.form.value;

    this.tipoService.cadastrarTipo(tipo)
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
