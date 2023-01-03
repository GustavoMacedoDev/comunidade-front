import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnderecoService } from 'src/app/services/endereco/endereco.service';
import { IListaEndereco } from 'src/app/shared/interfaces/endereco/lista-endereco.dto';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.component.html',
  styleUrls: ['./lista-endereco.component.css']
})
export class ListaEnderecoComponent implements OnInit {

  enderecos: IListaEndereco[] = [];

  constructor(
    private enderecoService: EnderecoService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.enderecoService.listaEnderecoPorIdMembro(this.route.snapshot.params['idMembro'])
      .subscribe(res => this.enderecos = res);
  }

}
