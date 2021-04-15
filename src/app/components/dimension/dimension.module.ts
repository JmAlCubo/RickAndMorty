import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DimensionRoutingModule } from './dimension-routing.module';

import { ListaDimensionesComponent } from './lista-dimensiones/lista-dimensiones.component';
import { DetalleDimensionComponent } from './detalle-dimension/detalle-dimension.component';

@NgModule({
  declarations: [
    ListaDimensionesComponent,
    DetalleDimensionComponent
  ],
  imports: [
    CommonModule,
    DimensionRoutingModule
  ]
})
export class DimensionModule { }
