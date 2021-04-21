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

  ObtenerListaEpisodios(urlApi: string) {
    if( !urlApi ) {
      urlApi = `${this.url}episode`;
    }
    return this.http.get<Episodios>(urlApi);
  }

  ObtenerEpisodio(id: string) {
    return this.http.get<Episodio>(`${this.url}episode/${id}`);
  }

  ObtenerEpisodioUrl(urlApi: string){
    return new Promise((resolve, reject) => {
      this.http.get<Episodio>(urlApi).toPromise()
      .then(
        res => {
          resolve(res);
        },
        msg => {
          reject(new Error("problemas con la petición: "+ msg.error))
        }
      );
    });
  }

  ObtenerListaPersonajes(urlApi: string) {
    if( !urlApi ) {
      urlApi = `${this.url}character`;
    }
    return this.http.get<Personajes>(urlApi);
  }

  ObtenerPersonaje(id: string) {
    return this.http.get<Personaje>(`${this.url}character/${id}`);
  }

  ObtenerPersonajeURL(urlApi: string) {
    return this.http.get<Personaje>(urlApi);
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
