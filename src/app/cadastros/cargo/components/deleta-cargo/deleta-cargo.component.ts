import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CargoService } from 'src/app/services/cargo/cargo.service';

@Component({
  selector: 'app-deleta-cargo',
  templateUrl: './deleta-cargo.component.html',
  styleUrls: ['./deleta-cargo.component.css']
})
export class DeletaCargoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletaCargoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private cargoService: CargoService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }

  onCancel() {
    this.dialogRef.close();
  }

  deletaCargo() {
    const idCargo = this.data.idCargo;

    this.cargoService.deletaCargo(idCargo)
      .subscribe({
        next: res => {
          const msg: string = res.mensagem;
          this.snackBar.open(msg, "Sucesso", {duration: 3000});
          window.location.reload();
        },
        error: (erro) => {
          const msg: string = erro.error.mensagem;
          this.snackBar.open(msg, "Error", {duration: 3000});
          this.onCancel();
        }
      });
    
      return false;
  }
}
