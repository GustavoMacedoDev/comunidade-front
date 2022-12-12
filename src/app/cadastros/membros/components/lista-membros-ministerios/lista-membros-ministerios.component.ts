import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembroMinisterioService } from 'src/app/services/membro-ministerio/membro-ministerio.service';
import { MinisterioService } from 'src/app/services/ministerio/ministerio.service';
import { IListaMembrosPorMinisterioDto } from 'src/app/shared/interfaces/membro-ministerio/membro-ministerio.dto';
import { IListaMinisterioDto } from 'src/app/shared/interfaces/ministerio/lista-ministerios.dto';

@Component({
  selector: 'app-lista-membros-ministerios',
  templateUrl: './lista-membros-ministerios.component.html',
  styleUrls: ['./lista-membros-ministerios.component.css']
})
export class ListaMembrosMinisteriosComponent implements OnInit {

  membros: IListaMembrosPorMinisterioDto[] = [];
  ministerio!: IListaMinisterioDto;

  constructor(
    private membroMinisterioService: MembroMinisterioService,
    private route: ActivatedRoute,
    private ministerioService: MinisterioService
    ) { }

  ngOnInit(): void {
    this.ministerioService.listaMinisterioPorId(this.route.snapshot.params['idMinisterio'])
      .subscribe(res => this.ministerio = res);
    this.membroMinisterioService.listaMembrosPorMinisterio(this.route.snapshot.params['idMinisterio'])
      .subscribe(res => this.membros = res);
    
  }



}
