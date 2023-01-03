import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { AppComponent } from './app.component';
import { CadastrosRoutingModule } from './cadastros/cadastros-routing.module';
import { MembrosModule } from './cadastros/membros/membros.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioModule } from './home/inicio/inicio.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { NgxMaskModule } from 'ngx-mask';
import { MinisteriosModule } from './cadastros/ministerios/ministerios.module';
import { CargoModule } from './cadastros/cargo/cargo.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PerfilModule } from './cadastros/perfil/perfil.module';
import { EnderecosModule } from './cadastros/enderecos/enderecos.module';

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CadastrosRoutingModule,
    MembrosModule,
    SharedModule,
    InicioModule,
    HomeRoutingModule,
    MinisteriosModule,
    CargoModule,
    MatDialogModule,
    PerfilModule,
    EnderecosModule,
    
    NgxMaskModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { 
      provide : LOCALE_ID,
      useValue : 'pt-BR'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
