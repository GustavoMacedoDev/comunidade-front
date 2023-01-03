import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from 'src/app/services/contato/contato.service';
import { EnderecoService } from 'src/app/services/endereco/endereco.service';
import { MembroService } from 'src/app/services/membro/membro.service';
import { IListaContatosDto } from 'src/app/shared/interfaces/contato/lista-contato.dto';
import { IListaEndereco } from 'src/app/shared/interfaces/endereco/lista-endereco.dto';
import { IDetalhaMembroDto } from 'src/app/shared/interfaces/membros/detalha-membro.dto';
import { IListaMembrosDto } from 'src/app/shared/interfaces/membros/lista-membros.dto';

@Component({
  selector: 'app-detalha-membro',
  templateUrl: './detalha-membro.component.html',
  styleUrls: ['./detalha-membro.component.css']
})
export class DetalhaMembroComponent implements OnInit {

  membro!: IDetalhaMembroDto;
  contatos: IListaContatosDto[] = [];
  enderecos: IListaEndereco[] = [];

  constructor(
    private membroService: MembroService,
    private route: ActivatedRoute,
    private contatoService: ContatoService,
    private enderecoService: EnderecoService
    ) { }

  ngOnInit(): void {
    this.membroService.detalhaMembro(this.route.snapshot.params['idMembro'])
      .subscribe(res=> this.membro = res);
    this.contatoService.listaContatosPorIdMembro(this.route.snapshot.params['idMembro'])
      .subscribe(res=> this.contatos = res);
    this.enderecoService.listaEnderecoPorIdMembro(this.route.snapshot.params['idMembro'])
      .subscribe(res=> this.enderecos = res);
  }

}
