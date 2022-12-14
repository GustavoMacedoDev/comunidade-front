import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCargoComponent } from './components/lista-cargo/lista-cargo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastraCargoComponent } from './components/cadastra-cargo/cadastra-cargo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EditaCargoComponent } from './components/edita-cargo/edita-cargo.component';
import { DeletaCargoComponent } from './components/deleta-cargo/deleta-cargo.component';

@NgModule({
  declarations: [
    ListaCargoComponent,
    CadastraCargoComponent,
    EditaCargoComponent,
    DeletaCargoComponent
  ], entryComponents: [
    CadastraCargoComponent
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
export class CargoModule { }
