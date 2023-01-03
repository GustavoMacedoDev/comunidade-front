import { Component, OnInit } from '@angular/core';
import { IListaTipoLogradouro } from 'src/app/shared/interfaces/tipo-logradouro/tipo-logradouro.dto';

@Component({
  selector: 'app-lista-tipo',
  templateUrl: './lista-tipo.component.html',
  styleUrls: ['./lista-tipo.component.css']
})
export class ListaTipoComponent implements OnInit {

  tipos: IListaTipoLogradouro[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
