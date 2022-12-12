import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastraMembroMinisterioComponent } from "./membros/components/cadastra-membro-ministerio/cadastra-membro-ministerio.component";
import { CadastraMembroComponent } from "./membros/components/cadastra-membro/cadastra-membro.component";
import { DetalhaMembroComponent } from "./membros/components/detalha-membro/detalha-membro.component";
import { ListaMembrosMinisteriosComponent } from "./membros/components/lista-membros-ministerios/lista-membros-ministerios.component";
import { ListaMembrosComponent } from "./membros/components/lista-membros/lista-membros.component";
import { CadastraMinisterioComponent } from "./ministerios/components/cadastra-ministerio/cadastra-ministerio.component";
import { EditaMinisterioComponent } from "./ministerios/components/edita-ministerio/edita-ministerio.component";
import { ListaMinisterioComponent } from "./ministerios/components/lista-ministerio/lista-ministerio.component";

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
  },
  {
    path: 'lista-ministerio',
    component: ListaMinisterioComponent
  },
  {
    path: 'cadastra-ministerio',
    component: CadastraMinisterioComponent
  },
  {
    path: 'lista-membros-ministerio/:idMinisterio',
    component: ListaMembrosMinisteriosComponent
  },
  {
    path: 'edita-ministerio/:idMinisterio',
    component: EditaMinisterioComponent
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