import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaMembrosComponent } from './components/lista-membros/lista-membros.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastraMembroComponent } from './components/cadastra-membro/cadastra-membro.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxMaskModule } from 'ngx-mask';
import { DetalhaMembroComponent } from './components/detalha-membro/detalha-membro.component';
import { CadastraMembroMinisterioComponent } from './components/cadastra-membro-ministerio/cadastra-membro-ministerio.component';

@NgModule({
  declarations: [
    ListaMembrosComponent,
    CadastraMembroComponent,
    DetalhaMembroComponent,
    CadastraMembroMinisterioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxMaskModule
    
  ]
})
export class MembrosModule { }
