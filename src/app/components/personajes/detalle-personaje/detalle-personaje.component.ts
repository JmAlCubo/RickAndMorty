import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Personaje } from 'src/app/models/personaje';

import { ConexionApiService } from './../../shared/service/conexion-api.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {

  personaje: Personaje;

  constructor(
    private route: ActivatedRoute,
    private service: ConexionApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.obtenerPersonaje(params.id)
    });
  }

  obtenerPersonaje(id: string){
    this.service.ObtenerPersonaje(id)
    .subscribe( personaje => {
      this.personaje = personaje;
    });
  }
}
