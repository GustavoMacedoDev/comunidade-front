import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { IListaPerfilDto } from 'src/app/shared/interfaces/perfil/lista-perfil.dto';
import { CadastraPerfilComponent } from '../cadastra-perfil/cadastra-perfil.component';
import { DeletaPerfilComponent } from '../deleta-perfil/deleta-perfil.component';
import { EditaPerfilComponent } from '../edita-perfil/edita-perfil.component';

@Component({
  selector: 'app-lista-perfil',
  templateUrl: './lista-perfil.component.html',
  styleUrls: ['./lista-perfil.component.css']
})
export class ListaPerfilComponent implements OnInit {

  perfis: IListaPerfilDto[] = []; 

  constructor(
    private perfilService: PerfilService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.perfilService.listaPerfil().subscribe(res => this.perfis = res);
  }

  openDialogCadastra(): void {
    let dialogRef = this.dialog.open(CadastraPerfilComponent, {
      width: '250px'
    });

  }

  openDialogEdita(idPerfil:any): void {
    const id = idPerfil;
    let dialogRef = this.dialog.open(EditaPerfilComponent, { 
      data: { 
        idPerfil: id
      }
    });

  }

  openDialogDeleta(idPerfil:any, nome:any): void {
    const id = idPerfil;
    const nomePerfil = nome;
    let dialogRef = this.dialog.open(DeletaPerfilComponent, {
      data: {
        idPerfil: id,
        nome: nomePerfil
      }
    });

  }

}
