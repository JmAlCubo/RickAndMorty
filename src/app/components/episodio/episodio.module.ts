import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

import { EpisodioRoutingModule } from './episodio-routing.module';
import { DetalleEpisodioComponent } from './detalle-episodio/detalle-episodio.component';
import { ListaEpisodiosComponent } from './lista-episodios/lista-episodios.component';
import { PersonajesModule } from './../personajes/personajes.module';

@NgModule({
  declarations: [
    DetalleEpisodioComponent,
    ListaEpisodiosComponent
  ],
  imports: [
    CommonModule,
    EpisodioRoutingModule,
    FormsModule,
    MaterialModule,
    PersonajesModule
  ]
})
export class EpisodioModule { }
