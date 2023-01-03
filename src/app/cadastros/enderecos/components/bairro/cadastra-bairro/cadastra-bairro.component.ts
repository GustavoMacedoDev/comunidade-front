import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BairroService } from 'src/app/services/bairro/bairro.service';
import { MunicipioService } from 'src/app/services/municipio/municipio.service';
import { IListaMunicipio } from 'src/app/shared/interfaces/municipio/municipio.dto';

@Component({
  selector: 'app-cadastra-bairro',
  templateUrl: './cadastra-bairro.component.html',
  styleUrls: ['./cadastra-bairro.component.css']
})
export class CadastraBairroComponent implements OnInit {

  form!: FormGroup;
  municipios: IListaMunicipio[] = [];

  constructor(
    private bairroService: BairroService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CadastraBairroComponent>,
    private snackBar: MatSnackBar,
    private municipioService: MunicipioService
  ) { }

  ngOnInit(): void {
    this.geraForm();
    this.municipioService.listaMunicipios().subscribe(res => this.municipios = res);
  }

  geraForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      idMunicipio: ['', Validators.required]
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  cadastrarBairro() {
    if(this.form.invalid) {
      return;
    }

    const bairro = this.form.value;
    this.bairroService.cadastrarBairro(bairro)
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
