import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo/cargo.service';
import { IListaCargoDto } from 'src/app/shared/interfaces/cargos/lista-cargos.dto';

@Component({
  selector: 'app-edita-cargo',
  templateUrl: './edita-cargo.component.html',
  styleUrls: ['./edita-cargo.component.css']
})
export class EditaCargoComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditaCargoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public cargoService: CargoService,
    public router: Router,
    public snackBar: MatSnackBar
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

  editarCargo(){
    if(this.form.invalid) {
      return;
    }

    const cargo = this.form.value;
    const idCargo = this.data.idCargo;
    
    this.cargoService.editaCargo(idCargo, cargo)
      .subscribe({
        next: res => {
          const msg: string = res.mensagem;
          this.snackBar.open(msg, "Sucesso", {duration: 3000});
          window.location.reload();
        },
        error: (erro) =>{
          const msg: string = erro.error.mensagem;
          this.snackBar.open(msg, "Erro", {duration: 3000});
        }
      });

      return false;
   }

}
