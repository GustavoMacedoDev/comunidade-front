import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastraMembroMinisterioComponent } from "./membros/components/cadastra-membro-ministerio/cadastra-membro-ministerio.component";
import { CadastraMembroComponent } from "./membros/components/cadastra-membro/cadastra-membro.component";
import { DetalhaMembroComponent } from "./membros/components/detalha-membro/detalha-membro.component";
import { ListaMembrosComponent } from "./membros/components/lista-membros/lista-membros.component";

export const routes :Routes = [
  {
    path: 'lista-membros',
    component: ListaMembrosComponent
  },
  {
    path: 'cadastra-membro',
    component: CadastraMembroComponent
  },
  {
    path: 'detalha-membro/:idMembro',
    component: DetalhaMembroComponent
  },
  {
    path: 'cadastra-membro-ministerio',
    component: CadastraMembroMinisterioComponent
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
  export class CadastrosRoutingModule {
  }