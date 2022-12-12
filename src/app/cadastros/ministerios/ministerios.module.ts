import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaMinisterioComponent } from './components/lista-ministerio/lista-ministerio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastraMinisterioComponent } from './components/cadastra-ministerio/cadastra-ministerio.component';
import { RouterModule } from '@angular/router';
import { EditaMinisterioComponent } from './components/edita-ministerio/edita-ministerio.component';



@NgModule({
  declarations: [
    ListaMinisterioComponent,
    CadastraMinisterioComponent,
    EditaMinisterioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MinisteriosModule { }
