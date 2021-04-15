import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleDimensionComponent } from './detalle-dimension/detalle-dimension.component';
import { ListaDimensionesComponent } from './lista-dimensiones/lista-dimensiones.component';

const routes: Routes = [
  {
    path: '',
    component: ListaDimensionesComponent
  },
  {
    path: ':id',
    component: DetalleDimensionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DimensionRoutingModule { }
