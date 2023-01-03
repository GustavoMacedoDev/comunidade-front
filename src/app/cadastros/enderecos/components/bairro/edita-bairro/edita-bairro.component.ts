import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BairroService } from 'src/app/services/bairro/bairro.service';
import { MunicipioService } from 'src/app/services/municipio/municipio.service';
import { IListaMunicipio } from 'src/app/shared/interfaces/municipio/municipio.dto';
import { EditaLogradouroComponent } from '../../logradouro/edita-logradouro/edita-logradouro.component';

@Component({
  selector: 'app-edita-bairro',
  templateUrl: './edita-bairro.component.html',
  styleUrls: ['./edita-bairro.component.css']
})
export class EditaBairroComponent implements OnInit {

  form!: FormGroup;
  municipios: IListaMunicipio[] = [];

  constructor(
    private municipioService: MunicipioService,
    private bairroService: BairroService,
    public dialogRef: MatDialogRef<EditaBairroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private snackBar: MatSnackBar 
  ) { }

  ngOnInit(): void {
    this.geraForm();
    this.municipioService.listaMunicipios().subscribe(res => this.municipios = res);
  }

  geraForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      id: ['', Validators.required]
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  editarBairro() {
    if(this.form.invalid) {
      return;
    }

    const bairro = this.form.value;
    const idBairro = this.data.idBairro;

    this.bairroService.editaBairro(idBairro, bairro)
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
