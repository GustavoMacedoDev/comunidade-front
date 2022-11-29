import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo/cargo.service';
import { MembroService } from 'src/app/services/membro/membro.service';
import { IListaCargo } from 'src/app/shared/interfaces/cargos/lista-cargo.dto';
import { ICadastraMembroDto } from 'src/app/shared/interfaces/membros/cadastra-membro.dto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastra-membro',
  templateUrl: './cadastra-membro.component.html',
  styleUrls: ['./cadastra-membro.component.css']
})
export class CadastraMembroComponent implements OnInit {

  novoMembro!: ICadastraMembroDto;
  form!: FormGroup;
  cargos: IListaCargo[] = [];
  cpf!: string;

  constructor(
    private membroService: MembroService,
    private cargoService: CargoService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.geraForm();
    this.cargoService.listaCargos().subscribe(res=> this.cargos = res);
  }

  geraForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      endereco: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      idCargo: [Validators.required]
    });
  }

  cadastraMembro(){
    if(this.form.invalid){
      return;
    }

    const membro: ICadastraMembroDto = this.form.value;
    membro.idCargo = parseInt(membro.idCargo);
    this.membroService.cadastraMembros(membro)
      .subscribe({
        next: res =>{
          const msg: string = "Membro cadastrado com sucesso!";
          this.router.navigate(['/lista-membro']);
          this.snackBar.open(msg, "Sucesso", {duration: 3000});
        },
        error: (erro) =>{
          const msg: string = erro.error.mensagem;
          this.snackBar.open(msg, "Erro", {duration: 3000});
        }
      });

      return false;

  }
}
