import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CargoService } from 'src/app/services/cargo/cargo.service';
import { IListaCargoDto } from 'src/app/shared/interfaces/cargos/lista-cargos.dto';
import { CadastraCargoComponent } from '../cadastra-cargo/cadastra-cargo.component';
import { DeletaCargoComponent } from '../deleta-cargo/deleta-cargo.component';
import { EditaCargoComponent } from '../edita-cargo/edita-cargo.component';

@Component({
  selector: 'app-lista-cargo',
  templateUrl: './lista-cargo.component.html',
  styleUrls: ['./lista-cargo.component.css']
})
export class ListaCargoComponent implements OnInit {

  cargos: IListaCargoDto[] = [];

  constructor(
    private cargoService: CargoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cargoService.listaCargos().subscribe(res => this.cargos = res);
  }

  openDialogCadastra(): void {
    let dialogRef = this.dialog.open(CadastraCargoComponent, {
      width: '250px'
    });

  }

  openDialogEdita(idCargo:any): void {
    const id = idCargo;
    let dialogRef = this.dialog.open(EditaCargoComponent, { 
      data: { 
        idCargo: id
      }
    });

  }

  openDialogDeleta(idCargo:any, nome:any): void {
    const id = idCargo;
    const nomeCargo = nome;
    let dialogRef = this.dialog.open(DeletaCargoComponent, {
      data: {
        idCargo: id,
        nome: nomeCargo
      }
    });

  }

}
