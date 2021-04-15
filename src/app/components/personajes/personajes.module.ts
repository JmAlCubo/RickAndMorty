import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { TarjetaPersonajeComponent } from './tarjeta-personaje/tarjeta-personaje.component';


@NgModule({
  declarations: [
    ListaPersonajesComponent,
    DetallePersonajeComponent,
    TarjetaPersonajeComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MaterialModule
  ],
  exports: [
    TarjetaPersonajeComponent
  ]
})
export class PersonajesModule { }
