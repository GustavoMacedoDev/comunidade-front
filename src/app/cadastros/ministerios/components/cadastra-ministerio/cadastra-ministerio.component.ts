import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MinisterioService } from 'src/app/services/ministerio/ministerio.service';
import { ICadastraMinisterioDto } from 'src/app/shared/interfaces/ministerio/cadastra-ministerio.dto';

@Component({
  selector: 'app-cadastra-ministerio',
  templateUrl: './cadastra-ministerio.component.html',
  styleUrls: ['./cadastra-ministerio.component.css']
})
export class CadastraMinisterioComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private ministerioService: MinisterioService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.geraForm();
  }

  geraForm(){
    this.form = this.fb.group({
      nome: ['', Validators.required],
      sigla: ['', Validators.required],
      dataCriacao: ['', Validators.required]
    });
  }

  cadastraMinisterio(){
    if(this.form.invalid) {
      return;
    }

    const ministerio: ICadastraMinisterioDto = this.form.value;
    this.ministerioService.cadastraMinisterio(ministerio)
      .subscribe({
        next: res =>{
          const msg: string = "Ministério cadastrado com sucesso";
          this.router.navigate(['lista-ministerio']);
          this.snackBar.open(msg, "Sucesso", { duration: 3000 });
        },
        error: (erro) =>{
          const msg: string = erro.error.mensagem;
          this.snackBar.open(msg, "Erro", { duration: 3000 });
        }
      });

      return false;
  }

}
