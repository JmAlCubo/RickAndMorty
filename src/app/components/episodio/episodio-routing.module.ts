import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleEpisodioComponent } from './detalle-episodio/detalle-episodio.component';
import { ListaEpisodiosComponent } from './lista-episodios/lista-episodios.component';

const routes: Routes = [
  {
    path: '',
    component: ListaEpisodiosComponent
  },
  {
    path: ':id',
    component: DetalleEpisodioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodioRoutingModule { }
