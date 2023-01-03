import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEnderecoComponent } from './components/lista-endereco/lista-endereco.component';
import { HomeEnderecosComponent } from './components/home-enderecos/home-enderecos.component';
import { ListaTipoComponent } from './components/tipo-logradouro/lista-tipo/lista-tipo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastraTipoComponent } from './components/tipo-logradouro/cadastra-tipo/cadastra-tipo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditaTipoComponent } from './components/tipo-logradouro/edita-tipo/edita-tipo.component';
import { DeletaTipoComponent } from './components/tipo-logradouro/deleta-tipo/deleta-tipo.component';
import { ListaLogradouroComponent } from './components/logradouro/lista-logradouro/lista-logradouro.component';
import { CadastraLogradouroComponent } from './components/logradouro/cadastra-logradouro/cadastra-logradouro.component';
import { EditaLogradouroComponent } from './components/logradouro/edita-logradouro/edita-logradouro.component';
import { DeletaLogradouroComponent } from './components/logradouro/deleta-logradouro/deleta-logradouro.component';
import { CadastraBairroComponent } from './components/bairro/cadastra-bairro/cadastra-bairro.component';
import { ListaBairroComponent } from './components/bairro/lista-bairro/lista-bairro.component';
import { EditaBairroComponent } from './components/bairro/edita-bairro/edita-bairro.component';
import { DeletaBairroComponent } from './components/bairro/deleta-bairro/deleta-bairro.component';

@NgModule({
  declarations: [
    ListaEnderecoComponent,
    HomeEnderecosComponent,
    ListaTipoComponent,
    CadastraTipoComponent,
    EditaTipoComponent,
    DeletaTipoComponent,
    ListaLogradouroComponent,
    CadastraLogradouroComponent,
    EditaLogradouroComponent,
    DeletaLogradouroComponent,
    CadastraBairroComponent,
    ListaBairroComponent,
    EditaBairroComponent,
    DeletaBairroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ListaEnderecoComponent
  ]
})
export class EnderecosModule { }
