import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogradouroService } from 'src/app/services/logradouro/logradouro.service';
import { TipoLogradouroService } from 'src/app/services/tipo-logradouro/tipo-logradouro.service';
import { IListaTipoLogradouro } from 'src/app/shared/interfaces/tipo-logradouro/tipo-logradouro.dto';

@Component({
  selector: 'app-cadastra-logradouro',
  templateUrl: './cadastra-logradouro.component.html',
  styleUrls: ['./cadastra-logradouro.component.css']
})
export class CadastraLogradouroComponent implements OnInit {

  form!: FormGroup;
  tipos: IListaTipoLogradouro[] = []; 

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CadastraLogradouroComponent>,
    public logradouroService: LogradouroService,
    private tipoLogradouroService: TipoLogradouroService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.geraForm();
    this.tipoLogradouroService.listaTipoLogradouro().subscribe(res => this.tipos = res);
  }

  geraForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      idTipoLogradouro: ['', Validators.required]
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  cadastrarLogradouro() {
    if(this.form.invalid) {
      return;
    }

    const logradouro = this.form.value;
    this.logradouroService.cadastrarLogradouro(logradouro)
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
