import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogradouroService } from 'src/app/services/logradouro/logradouro.service';
import { IListaLogradouro } from 'src/app/shared/interfaces/logradouro/logradouro.dto';
import { CadastraLogradouroComponent } from '../cadastra-logradouro/cadastra-logradouro.component';
import { DeletaLogradouroComponent } from '../deleta-logradouro/deleta-logradouro.component';
import { EditaLogradouroComponent } from '../edita-logradouro/edita-logradouro.component';

@Component({
  selector: 'app-lista-logradouro',
  templateUrl: './lista-logradouro.component.html',
  styleUrls: ['./lista-logradouro.component.css']
})
export class ListaLogradouroComponent implements OnInit {

  logradouros: IListaLogradouro[] = []; 

  constructor(
    private logradouroService: LogradouroService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.logradouroService.listaLogradouro().subscribe(res=> this.logradouros = res);
  }

  openDialogCadastra() {
    let dialogRef = this.dialog.open(CadastraLogradouroComponent, {
      width: '450px'
    });
  }

  openDialogEdita(idLogradouro: any) {
    const id = idLogradouro;
    let dialogRef = this.dialog.open(EditaLogradouroComponent, { 
      width: '450px',
      data: { 
        idLogradouro: id
      }
    });

  }

  openDialogDeleta(idLogradouro:any, nome:any): void {
    const id = idLogradouro;
    const nomeLogradouro = nome;
    let dialogRef = this.dialog.open(DeletaLogradouroComponent, {
      data: {
        idLogradouro: id,
        nome: nomeLogradouro
      }
    });

  }

}
