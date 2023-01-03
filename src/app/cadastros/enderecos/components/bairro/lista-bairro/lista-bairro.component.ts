import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BairroService } from 'src/app/services/bairro/bairro.service';
import { IListaBairro } from 'src/app/shared/interfaces/bairro/bairro.dto';
import { CadastraBairroComponent } from '../cadastra-bairro/cadastra-bairro.component';
import { DeletaBairroComponent } from '../deleta-bairro/deleta-bairro.component';
import { EditaBairroComponent } from '../edita-bairro/edita-bairro.component';

@Component({
  selector: 'app-lista-bairro',
  templateUrl: './lista-bairro.component.html',
  styleUrls: ['./lista-bairro.component.css']
})
export class ListaBairroComponent implements OnInit {

  bairros: IListaBairro[] = [];

  constructor(
    private bairroService: BairroService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.bairroService.listaBairros().subscribe(res=> this.bairros = res);
  }

  openDialogEdita(idBairro:any) {
    const id = idBairro;
    let dialogRef = this.dialog.open(EditaBairroComponent, { 
      data: { 
        idBairro: id
      }
    });
  }

  openDialogDeleta(idBairro:any, nome:any) {
    const id = idBairro;
    const nomeBairro = nome;
    let dialogRef = this.dialog.open(DeletaBairroComponent, {
      data: {
        idBairro: id,
        nome: nomeBairro
      }
    });
  }

  openDialogCadastra() {
    let dialogRef = this.dialog.open(CadastraBairroComponent, {
      width: '450px'
    });
  }

}
