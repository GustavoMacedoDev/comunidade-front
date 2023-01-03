import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TipoLogradouroService } from 'src/app/services/tipo-logradouro/tipo-logradouro.service';
import { IListaTipoLogradouro } from 'src/app/shared/interfaces/tipo-logradouro/tipo-logradouro.dto';
import { CadastraTipoComponent } from '../cadastra-tipo/cadastra-tipo.component';
import { DeletaTipoComponent } from '../deleta-tipo/deleta-tipo.component';
import { EditaTipoComponent } from '../edita-tipo/edita-tipo.component';

@Component({
  selector: 'app-lista-tipo',
  templateUrl: './lista-tipo.component.html',
  styleUrls: ['./lista-tipo.component.css']
})
export class ListaTipoComponent implements OnInit {

  tipos: IListaTipoLogradouro[] = [];

  constructor(
    private tipoLogradouroService: TipoLogradouroService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.tipoLogradouroService.listaTipoLogradouro().subscribe(res => this.tipos = res);
  }

  openDialogCadastra(): void {
    let dialogRef = this.dialog.open(CadastraTipoComponent, {
      width: '250px'
    });

  }

  openDialogEdita(idTipo:any): void {
    const id = idTipo;
    let dialogRef = this.dialog.open(EditaTipoComponent, { 
      data: { 
        idTipo: id
      }
    });

  }

  openDialogDeleta(idTipo:any, nome:any): void {
    const id = idTipo;
    const nomeTipo = nome;
    let dialogRef = this.dialog.open(DeletaTipoComponent, {
      data: {
        idTipo: id,
        nome: nomeTipo
      }
    });

  }

}
