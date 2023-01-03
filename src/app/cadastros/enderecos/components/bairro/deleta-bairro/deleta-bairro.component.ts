import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BairroService } from 'src/app/services/bairro/bairro.service';

@Component({
  selector: 'app-deleta-bairro',
  templateUrl: './deleta-bairro.component.html',
  styleUrls: ['./deleta-bairro.component.css']
})
export class DeletaBairroComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletaBairroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bairroService: BairroService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.dialogRef.close();
  }

  deletaBairro() {
    const idBairro = this.data.idBairro;

    this.bairroService.deletaBairro(idBairro)
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
  }

}
