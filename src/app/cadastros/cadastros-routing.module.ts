import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastraCargoComponent } from "./cargo/components/cadastra-cargo/cadastra-cargo.component";
import { ListaCargoComponent } from "./cargo/components/lista-cargo/lista-cargo.component";
import { HomeEnderecosComponent } from "./enderecos/components/home-enderecos/home-enderecos.component";
import { ListaEnderecoComponent } from "./enderecos/components/lista-endereco/lista-endereco.component";
import { ListaTipoComponent } from "./enderecos/components/tipo-logradouro/lista-tipo/lista-tipo.component";
import { CadastraMembroMinisterioComponent } from "./membros/components/cadastra-membro-ministerio/cadastra-membro-ministerio.component";
import { CadastraMembroComponent } from "./membros/components/cadastra-membro/cadastra-membro.component";
import { DetalhaMembroComponent } from "./membros/components/detalha-membro/detalha-membro.component";
import { ListaMembrosMinisteriosComponent } from "./membros/components/lista-membros-ministerios/lista-membros-ministerios.component";
import { ListaMembrosComponent } from "./membros/components/lista-membros/lista-membros.component";
import { CadastraMinisterioComponent } from "./ministerios/components/cadastra-ministerio/cadastra-ministerio.component";
import { DeletaMinisterioComponent } from "./ministerios/components/deleta-ministerio/deleta-ministerio.component";
import { EditaMinisterioComponent } from "./ministerios/components/edita-ministerio/edita-ministerio.component";
import { ListaMinisterioComponent } from "./ministerios/components/lista-ministerio/lista-ministerio.component";
import { CadastraPerfilComponent } from "./perfil/components/cadastra-perfil/cadastra-perfil.component";
import { DeletaPerfilComponent } from "./perfil/components/deleta-perfil/deleta-perfil.component";
import { EditaPerfilComponent } from "./perfil/components/edita-perfil/edita-perfil.component";
import { ListaPerfilComponent } from "./perfil/components/lista-perfil/lista-perfil.component";

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
  },
  {
    path: 'deleta-ministerio/:idMinisterio',
    component: DeletaMinisterioComponent
  },
  {
    path: 'lista-cargo',
    component: ListaCargoComponent
  },
  {
    path: 'cadastra-cargo',
    component: CadastraCargoComponent
  },
  {
    path: 'lista-perfil',
    component: ListaPerfilComponent
  }, 
  {
    path: 'cadastra-perfil',
    component: CadastraPerfilComponent
  },
  {
    path: 'edita-perfil',
    component: EditaPerfilComponent
  },
  {
    path: 'deleta-perfil',
    component: DeletaPerfilComponent
  },
  {
    path: 'lista-endereco',
    component: ListaEnderecoComponent
  },
  {
    path: 'home-endereco',
    component: HomeEnderecosComponent  
  },
  {
    path: 'lista-tipo',
    component: ListaTipoComponent
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