import { Component, OnInit } from '@angular/core';
import { MinisterioService } from 'src/app/services/ministerio/ministerio.service';
import { IListaMinisterioDto } from 'src/app/shared/interfaces/ministerio/lista-ministerios.dto';

@Component({
  selector: 'app-lista-ministerio',
  templateUrl: './lista-ministerio.component.html',
  styleUrls: ['./lista-ministerio.component.css']
})
export class ListaMinisterioComponent implements OnInit {

  ministerios: IListaMinisterioDto[] = [];

  constructor(private ministerioService: MinisterioService) { }

  ngOnInit(): void {
    this.ministerioService.listaMinisterios().subscribe(res => this.ministerios = res);
  }

}
