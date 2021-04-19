import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from './../../shared/service/conexion-api.service';

import { Dimensiones } from 'src/app/models/consulta_api/dimensiones';


@Component({
  selector: 'app-lista-dimensiones',
  templateUrl: './lista-dimensiones.component.html',
  styleUrls: ['./lista-dimensiones.component.css']
})
export class ListaDimensionesComponent implements OnInit {

  dimensiones: Dimensiones;
  nombreColumnas: string[] = ['id', 'name', 'type', 'dimension', 'acciones'];

  constructor(
    private service: ConexionApiService
  ) { }

  ngOnInit(): void {
    this.obtenerDimensiones("");
  }

  obtenerDimensiones(urlApi: string) {
    this.service.ObtenerListaDimensiones(urlApi)
      .subscribe(dimensiones => {
        this.dimensiones = dimensiones;
      });
  }

  cargarDimensiones(urlApi: string) {
    this.obtenerDimensiones(urlApi);
  }

}
