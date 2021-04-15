import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Episodios } from 'src/app/models/consulta_api/episodios';
import { Episodio } from 'src/app/models/episodio';
import { Personajes } from 'src/app/models/consulta_api/personajes';
import { Personaje } from 'src/app/models/personaje';
import { Dimensiones } from 'src/app/models/consulta_api/dimensiones';
import { Dimension } from 'src/app/models/dimension';


@Injectable({
  providedIn: 'root'
})
export class ConexionApiService {

  url: string = environment.url_api;

  constructor(
    private http: HttpClient
  ) { }

  ObtenerListaEpisodios(url_api: string) {
    if(!url_api) {
      url_api = `${this.url}episode`;
    }
    return this.http.get<Episodios>(url_api);
  }

  ObtenerEpisodio(id: string) {
    return this.http.get<Episodio>(`${this.url}episode/${id}`);
  }

  ObtenerListaPersonajes(url_api: string) {
    if(!url_api) {
      url_api = `${this.url}characters`;
    }
    return this.http.get<Personajes>(url_api);
  }

  ObtenerPersonaje(id: string) {
    return this.http.get<Personaje>(`${this.url}characters/${id}`);
  }
  ObtenerPersonajeURL(url_api: string) {
    return this.http.get<Personaje>(url_api);
  }

  ObtenerListaDimensiones(url_api: string) {
    if(!url_api) {
      url_api = `${this.url}location`;
    }
    return this.http.get<Dimensiones>(url_api);
  }

  ObtenerDimension(id: string) {
    return this.http.get<Dimension>(`${this.url}location/${id}`);
  }
}
