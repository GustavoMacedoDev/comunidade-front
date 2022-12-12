import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MembroMinisterioService } from 'src/app/services/membro-ministerio/membro-ministerio.service';
import { MembroService } from 'src/app/services/membro/membro.service';
import { MinisterioService } from 'src/app/services/ministerio/ministerio.service';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { ICadastraMembroMinisterioDto } from 'src/app/shared/interfaces/membros/cadastra-membro-ministerio.dto';
import { IListaMembrosDto } from 'src/app/shared/interfaces/membros/lista-membros.dto';
import { IListaMinisterioDto } from 'src/app/shared/interfaces/ministerio/lista-ministerios.dto';
import { IListaPerfilDto } from 'src/app/shared/interfaces/perfil/lista-perfil.dto';

@Component({
  selector: 'app-cadastra-membro-ministerio',
  templateUrl: './cadastra-membro-ministerio.component.html',
  styleUrls: ['./cadastra-membro-ministerio.component.css']
})
export class CadastraMembroMinisterioComponent implements OnInit {

  form!: FormGroup;
  membros: IListaMembrosDto[] = [];
  perfis: IListaPerfilDto[] = [];
  ministerios: IListaMinisterioDto[] = [];

  constructor(
    private fb: FormBuilder,
    private perfilService: PerfilService,
    private membroService: MembroService,
    private membroMinisterioService: MembroMinisterioService,
    private ministerioService: MinisterioService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.geraForm();
    this.buscaDados();
  }

  buscaDados() {
    this.perfilService.listaPerfil().subscribe(res => this.perfis = res);
    this.membroService.listaMembros().subscribe(res => this.membros = res);
    this.ministerioService.listaMinisterios().subscribe(res => this.ministerios = res);
  }
  geraForm() {
      this.form = this.fb.group({
        dataEntrada: ['', Validators.required],
        dataSaida: [''],
        responsavel: ['', Validators.required],
        idMembro: ['', Validators.required],
        idMinisterio: ['', Validators.required],
        idPerfil: ['', Validators.required]
      });
  }

  cadastraMembroMinisterio() {
    if(this.form.invalid){
      return;
    }

    const membroMinisterio: ICadastraMembroMinisterioDto = this.form.value;
    membroMinisterio.idMembro = parseInt(membroMinisterio.idMembro);
    membroMinisterio.idMinisterio = parseInt(membroMinisterio.idMinisterio);
    membroMinisterio.idPerfil = parseInt(membroMinisterio.idPerfil);
    membroMinisterio.responsavel = parseInt(membroMinisterio.responsavel);
    
    this.membroMinisterioService.cadastraMembroMinisterio(membroMinisterio)
      .subscribe({
        next: res =>{
          const msg: string = "Membro vinculado com sucesso!";
          //this.router.navigate(['/lista-membro']);
          this.snackBar.open(msg, "Sucesso", {duration: 3000});
        },
        error: (erro) => {
          const msg: string = "Erro ao vincular membro!";
          this.snackBar.open(msg, "Erro", {duration: 3000});
        }
      });


  }

}
