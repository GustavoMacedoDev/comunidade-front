import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./inicio/components/inicio/inicio.component";
import { LoginComponent } from "./inicio/components/login/login.component";

export const routes :Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class HomeRoutingModule {
  }