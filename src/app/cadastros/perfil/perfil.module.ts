import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPerfilComponent } from './components/lista-perfil/lista-perfil.component';
import { CadastraPerfilComponent } from './components/cadastra-perfil/cadastra-perfil.component';
import { EditaPerfilComponent } from './components/edita-perfil/edita-perfil.component';
import { DeletaPerfilComponent } from './components/deleta-perfil/deleta-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListaPerfilComponent,
    CadastraPerfilComponent,
    EditaPerfilComponent,
    DeletaPerfilComponent
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
  ]
})
export class PerfilModule { }
