import { Component, OnInit } from '@angular/core';
import { MembroService } from 'src/app/services/membro/membro.service';
import { IListaCargo } from 'src/app/shared/interfaces/cargos/lista-cargo.dto';
import { IListaMembrosDto } from 'src/app/shared/interfaces/membros/lista-membros.dto';

@Component({
  selector: 'app-lista-membros',
  templateUrl: './lista-membros.component.html',
  styleUrls: ['./lista-membros.component.css']
})
export class ListaMembrosComponent implements OnInit {

  membros: IListaMembrosDto[] = [];

  constructor(private membrosService: MembroService) { }

  ngOnInit(): void {
    this.membrosService.listaMembros().subscribe(res=>this.membros = res);
  }

}
