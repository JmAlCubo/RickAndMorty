import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from 'src/app/material/material.module';

import { NavegacionComponent } from './navegacion/navegacion.component';

import { ConexionApiService } from './service/conexion-api.service';

@NgModule({
  declarations: [
    NavegacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    HttpClientModule,
    NavegacionComponent
  ],
  providers: [
    ConexionApiService
  ]
})
export class SharedModule { }
