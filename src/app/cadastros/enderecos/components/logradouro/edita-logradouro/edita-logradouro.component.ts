import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LogradouroService } from 'src/app/services/logradouro/logradouro.service';
import { TipoLogradouroService } from 'src/app/services/tipo-logradouro/tipo-logradouro.service';
import { IListaLogradouro } from 'src/app/shared/interfaces/logradouro/logradouro.dto';
import { IListaTipoLogradouro } from 'src/app/shared/interfaces/tipo-logradouro/tipo-logradouro.dto';

@Component({
  selector: 'app-edita-logradouro',
  templateUrl: './edita-logradouro.component.html',
  styleUrls: ['./edita-logradouro.component.css']
})
export class EditaLogradouroComponent implements OnInit {

  form!: FormGroup;
  tipos: IListaTipoLogradouro[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditaLogradouroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private logradouroService: LogradouroService,
    private fb: FormBuilder,
    private tipoService: TipoLogradouroService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.geraForm();
    this.tipoService.listaTipoLogradouro().subscribe(res=> this.tipos = res);
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

  editarLogradouro() {
    if(this.form.invalid) 
      return;

    const logradouro = this.form.value;
    const idLogradouro = this.data.idLogradouro;

    this.logradouroService.editaLogradouro(idLogradouro, logradouro)
      .subscribe({
        next: res => {
          const msg: string = res.mensagem;
          this.snackBar.open(msg, "Sucesso", {duration: 3000});
          window.location.reload();
        },
        error: (erro) => {
          const msg: string = erro.error.mensagem;
          this.snackBar.open(msg, "Erro", {duration: 3000});
        }
      });
      
  }

}
