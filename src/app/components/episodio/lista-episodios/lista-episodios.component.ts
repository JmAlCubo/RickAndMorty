import { Component, Input, OnInit } from '@angular/core';

import { Episodios } from 'src/app/models/consulta_api/episodios';
import { Episodio } from 'src/app/models/episodio';
import { ConexionApiService } from './../../shared/service/conexion-api.service';

@Component({
  selector: 'app-lista-episodios',
  templateUrl: './lista-episodios.component.html',
  styleUrls: ['./lista-episodios.component.css']
})
export class ListaEpisodiosComponent implements OnInit {

  @Input() urlEpisodios: [string];
  listaEpisodios: Episodio[];
  episodios: Episodios;
  error: boolean = false;

  nombreColumnas: string[] = ['id', 'name', 'air_date', 'episode', 'acciones'];

  constructor(
    private service: ConexionApiService
  ) { }

  ngOnInit(): void {

    if (this.urlEpisodios) {
      this.obtenerListaEpisodios();
    } else {
      this.obtenerEpisodios('');
    }
  }

  obtenerEpisodios(url: string): void {
    this.service.ObtenerListaEpisodios(url)
      .subscribe(listaEpisodios => {
        this.listaEpisodios = listaEpisodios.results;
        this.episodios = listaEpisodios;
      });
  }

  cargarEpisodios(url: string) {
    this.obtenerEpisodios(url);
  }

  async obtenerListaEpisodios() {
    let lista: Episodio[] = [];
    try {
      for (let url of this.urlEpisodios) {
        let episodio = await this.service.ObtenerEpisodioUrl(url);
        lista.push(<Episodio>episodio);
      }
    } catch (error) {
      console.log(error);
      this.error = true;

    }

    this.listaEpisodios = lista;
    console.log(this.listaEpisodios);
  }

}
