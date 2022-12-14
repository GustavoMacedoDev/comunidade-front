import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembrosModule } from './membros/membros.module';
import { ListaCargoComponent } from './components/lista-cargo/lista-cargo.component';

@NgModule({
  declarations: [
    ListaCargoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CadastrosModule { }
