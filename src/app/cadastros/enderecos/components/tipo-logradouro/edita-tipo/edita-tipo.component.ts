import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoLogradouroService } from 'src/app/services/tipo-logradouro/tipo-logradouro.service';

@Component({
  selector: 'app-edita-tipo',
  templateUrl: './edita-tipo.component.html',
  styleUrls: ['./edita-tipo.component.css']
})
export class EditaTipoComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditaTipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tipoService: TipoLogradouroService,
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

  editarTipo() {
    if(this.form.invalid) 
      return;

    const tipo = this.form.value;
    const idTipo = this.data.idTipo;
    
    this.tipoService.editaTipo(idTipo, tipo)
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

      return false;
  }
}
