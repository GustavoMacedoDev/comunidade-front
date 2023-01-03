import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoLogradouroService } from 'src/app/services/tipo-logradouro/tipo-logradouro.service';

@Component({
  selector: 'app-deleta-tipo',
  templateUrl: './deleta-tipo.component.html',
  styleUrls: ['./deleta-tipo.component.css']
})
export class DeletaTipoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletaTipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tipoService: TipoLogradouroService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }

  deletaTipo() {
    const idTipo = this.data.idTipo;

    this.tipoService.deletaTipo(idTipo)
      .subscribe({
        next: res => {
          const msg: string = res.mensagem;
          this.snackBar.open(msg, "Sucesso", {duration: 3000});
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
