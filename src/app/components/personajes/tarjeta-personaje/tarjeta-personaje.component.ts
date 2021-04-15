import { Component, Input, OnInit } from '@angular/core';

import { Personaje } from 'src/app/models/personaje';
import { ConexionApiService } from './../../shared/service/conexion-api.service';

@Component({
  selector: 'app-tarjeta-personaje',
  templateUrl: './tarjeta-personaje.component.html',
  styleUrls: ['./tarjeta-personaje.component.css']
})
export class TarjetaPersonajeComponent implements OnInit {

  @Input() url: string;

  personaje: Personaje;

  constructor(
    private service: ConexionApiService
  ) { }

  ngOnInit(): void {
    this.ObtenerPersonaje();
  }

  ObtenerPersonaje(){
    this.service.ObtenerPersonajeURL(this.url)
    .subscribe( personaje =>{
      console.log(personaje);
      this.personaje = personaje;
    })
  }

}
