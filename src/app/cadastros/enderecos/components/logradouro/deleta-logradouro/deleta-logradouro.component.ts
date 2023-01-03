import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogradouroService } from 'src/app/services/logradouro/logradouro.service';

@Component({
  selector: 'app-deleta-logradouro',
  templateUrl: './deleta-logradouro.component.html',
  styleUrls: ['./deleta-logradouro.component.css']
})
export class DeletaLogradouroComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletaLogradouroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private logradouroService: LogradouroService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }

  deletaLogradouro() {
    const idLogradouro = this.data.idLogradouro;

    this.logradouroService.deletaLogradouro(idLogradouro)
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
