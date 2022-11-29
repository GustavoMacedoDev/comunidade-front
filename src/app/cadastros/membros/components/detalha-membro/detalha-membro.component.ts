import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembroService } from 'src/app/services/membro/membro.service';
import { IListaMembrosDto } from 'src/app/shared/interfaces/membros/lista-membros.dto';

@Component({
  selector: 'app-detalha-membro',
  templateUrl: './detalha-membro.component.html',
  styleUrls: ['./detalha-membro.component.css']
})
export class DetalhaMembroComponent implements OnInit {

  membro!: IListaMembrosDto;

  constructor(
    private membroService: MembroService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.membroService.detalhaMembro(this.route.snapshot.params['idMembro'])
      .subscribe(res=> this.membro = res);
  }

}
