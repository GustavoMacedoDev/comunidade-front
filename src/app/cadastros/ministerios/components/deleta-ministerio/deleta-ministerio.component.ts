import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MinisterioService } from 'src/app/services/ministerio/ministerio.service';
import { IListaMinisterioDto } from 'src/app/shared/interfaces/ministerio/lista-ministerios.dto';

@Component({
  selector: 'app-deleta-ministerio',
  templateUrl: './deleta-ministerio.component.html',
  styleUrls: ['./deleta-ministerio.component.css']
})
export class DeletaMinisterioComponent implements OnInit {

  ministerio!: IListaMinisterioDto;
  constructor(
    private route: ActivatedRoute,
    private ministerioService: MinisterioService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.ministerioService.listaMinisterioPorId(this.route.snapshot.params['idMinisterio'])
      .subscribe(res => this.ministerio = res);
  }

  excluiMinisterio() {
    const idMinisterio = this.ministerio.idMinisterio;
    
    this.ministerioService.deletaMinisterio(idMinisterio)
      .subscribe({
        next: res => {
          const msg: string = "Ministério excluído com sucesso";
          this.router.navigate(['/lista-ministerio']);
          this.snackBar.open(msg, "Sucesso", {duration: 3000});
        },
        error: (erro) => {
          const msg: string = erro.error.mensagem;
          //this.router.navigate(['/lista-ministerio']);
          this.snackBar.open(msg, "Erro", {duration: 7000});
        }
    });

    return false;

  }

  cancelarExclusao() {
    this.router.navigate(['/lista-ministerio']);
  }

  
}
