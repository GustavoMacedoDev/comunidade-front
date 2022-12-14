import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo/cargo.service';

@Component({
  selector: 'app-cadastra-cargo',
  templateUrl: './cadastra-cargo.component.html',
  styleUrls: ['./cadastra-cargo.component.css']
})
export class CadastraCargoComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CadastraCargoComponent>,
    private fb: FormBuilder,
    private cargoService: CargoService,
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

  onCancel(){
    this.dialogRef.close();
  }

  cadastrarCargo(){
    if(this.form.invalid) {
      return;
    }

    const cargo = this.form.value;
    this.cargoService.cadastrarCargo(cargo)
      .subscribe({
        next: res => {
          const msg: string = res.mensagem;
          this.snackBar.open(msg, "Sucesso", {duration:3000});
          this.dialogRef.close();
          window.location.reload();
        },
        error: (erro) =>{
          const msg: string = erro.error.mensagem;
          this.snackBar.open(msg, "Erro", {duration:3000});
          this.onCancel();
        }
      });

      return false;
  }

}
