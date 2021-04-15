import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPersonajesComponent
  },
  {
    path: ':id',
    component: DetallePersonajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
