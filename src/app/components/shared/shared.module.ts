import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from 'src/app/material/material.module';

import { NavegacionComponent } from './navegacion/navegacion.component';

import { ConexionApiService } from './service/conexion-api.service';
import { TemporadaEpisodioPipe } from './pipes/temporada-episodio.pipe';
import { IdUrlDimensionPipe } from './pipes/id-url-dimension.pipe';

@NgModule({
  declarations: [
    NavegacionComponent,
    TemporadaEpisodioPipe,
    IdUrlDimensionPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    HttpClientModule,
    NavegacionComponent,
    TemporadaEpisodioPipe,
    IdUrlDimensionPipe
  ],
  providers: [
    ConexionApiService
  ]
})
export class SharedModule { }
