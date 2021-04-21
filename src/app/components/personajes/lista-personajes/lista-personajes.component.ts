import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConexionApiService } from './../../shared/service/conexion-api.service';
import { Personajes } from 'src/app/models/consulta_api/personajes';
import { Personaje } from 'src/app/models/personaje';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  @Input() urlPersonajes: [string];
  listaPersonajes: Personaje[];
  info: Personajes;

  constructor(
    private service: ConexionApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.urlPersonajes) {
      this.obtenerListaPersonajes();
    } else {
      this.obtenerPersonajes("");
    }
  }

  obtenerPersonajes(urlApi: string): void {
    this.service.ObtenerListaPersonajes(urlApi)
      .subscribe(listaPersonajes => {
        this.listaPersonajes = listaPersonajes.results;
        this.info = listaPersonajes;
      });
  }

  obtenerListaPersonajes() {
    let lista: Personaje[] = [];
    for (let url of this.urlPersonajes) {
      let id = this.obtenerIdUrl(url);
      this.service.ObtenerPersonaje(id)
        .subscribe(personaje => {
          lista.push(personaje);
        });
    }
    this.listaPersonajes = lista;
  }

  obtenerIdUrl(url: string) {
    var urlArray = Array.from(url);
    var id: string;

    for (let i = urlArray.length - 1; i > 0; i--) {
      if (urlArray[i] === '/') {
        id = url.substr(i + 1, urlArray.length - 1);
        return id;
      }
    }
  }

  verDetallePersonaje(id: number) {
    this.router.navigate([`/personaje/${id}`]);
  }
}
