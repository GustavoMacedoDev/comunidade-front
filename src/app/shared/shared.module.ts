import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './pipes/cpf.pipe';
import { PhonePipe } from './pipes/phone.pipe';



@NgModule({
  declarations: [
    CpfPipe,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    PhonePipe
  ]
})
export class SharedModule { }
