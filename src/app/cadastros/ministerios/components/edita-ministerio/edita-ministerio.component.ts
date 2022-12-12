import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MinisterioService } from 'src/app/services/ministerio/ministerio.service';
import { IListaMinisterioDto } from 'src/app/shared/interfaces/ministerio/lista-ministerios.dto';

@Component({
  selector: 'app-edita-ministerio',
  templateUrl: './edita-ministerio.component.html',
  styleUrls: ['./edita-ministerio.component.css']
})
export class EditaMinisterioComponent implements OnInit {

  ministerio!: IListaMinisterioDto;
  form!: FormGroup;

  constructor(
    private ministerioService: MinisterioService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.listaMinisterioPorId();
    this.geraForm();
  }

  geraForm() {
    this.form = this.fb.group({
      dataCriacao: ['', Validators.required],
      nome: ['', Validators.required],
      sigla: ['', Validators.required]
    });
  }

  listaMinisterioPorId(){
    return this.ministerioService.listaMinisterioPorId(this.route.snapshot.params['idMinisterio'])
    .subscribe(res => this.ministerio = res);
  }

  editaMinisterio() {
    
  }

}
