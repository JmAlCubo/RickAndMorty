import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'episodio',
    loadChildren: () => import('./components/episodio/episodio.module').then(m => m.EpisodioModule)
  },
  {
    path: 'personaje',
    loadChildren: () => import('./components/personajes/personajes.module').then(m => m.PersonajesModule)
  },
  {
    path: 'dimension',
    loadChildren: () => import('./components/dimension/dimension.module').then(m => m.DimensionModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
