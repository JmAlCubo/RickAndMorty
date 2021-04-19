import { Component, OnInit } from '@angular/core';

import { Episodios } from 'src/app/models/consulta_api/episodios';
import { ConexionApiService } from './../../shared/service/conexion-api.service';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent implements OnInit {

  episodios: Episodios;

  nombreColumnas: string[] = ['id', 'name', 'air_date', 'episode', 'acciones'];

  constructor(
    private service: ConexionApiService
  ) { }

  ngOnInit(): void {
    this.obtenerListaEpisodios('');
  }

  obtenerListaEpisodios(url: string): void{
    this.service.ObtenerListaEpisodios(url)
    .subscribe( episodios => {
      this.episodios = episodios;
    });
  }

  cargarEpisodios(url: string){
    this.obtenerListaEpisodios(url);
  }

}
