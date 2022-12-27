import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeletaCargoComponent } from 'src/app/cadastros/cargo/components/deleta-cargo/deleta-cargo.component';
import { CargoService } from 'src/app/services/cargo/cargo.service';
import { PerfilService } from 'src/app/services/perfil/perfil.service';

@Component({
  selector: 'app-deleta-perfil',
  templateUrl: './deleta-perfil.component.html',
  styleUrls: ['./deleta-perfil.component.css']
})
export class DeletaPerfilComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletaPerfilComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private perfilService: PerfilService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.dialogRef.close();
  }

  deletaPerfil() {
    const idPerfil = this.data.idPerfil;

    this.perfilService.deletaPerfil(idPerfil)
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
