import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEnderecoComponent } from './components/lista-endereco/lista-endereco.component';
import { HomeEnderecosComponent } from './components/home-enderecos/home-enderecos.component';
import { ListaTipoComponent } from './components/tipo-logradouro/lista-tipo/lista-tipo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListaEnderecoComponent,
    HomeEnderecosComponent,
    ListaTipoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    ListaEnderecoComponent
  ]
})
export class EnderecosModule { }
