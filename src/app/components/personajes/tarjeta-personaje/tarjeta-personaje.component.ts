import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Personaje } from 'src/app/models/personaje';
import { ConexionApiService } from './../../shared/service/conexion-api.service';

@Component({
  selector: 'app-tarjeta-personaje',
  templateUrl: './tarjeta-personaje.component.html',
  styleUrls: ['./tarjeta-personaje.component.css']
})
export class TarjetaPersonajeComponent implements OnInit {

  @Input() url: string;
  @Input() personaje: Personaje
  @Output() verPersonaje = new EventEmitter<number>();

  constructor(
    private service: ConexionApiService
  ) { }

  ngOnInit(): void {
    this.verificarInput();
  }

  verificarInput(){
    if(this.url){
      this.obtenerPersonaje();
    }
  }

  obtenerPersonaje(){
    this.service.ObtenerPersonajeURL(this.url)
    .subscribe( personaje => {
      this.personaje = personaje;
    });
  }

  verDetallePersonaje(){
    console.log(this.personaje.id);
    this.verPersonaje.emit(this.personaje.id);
  }

}
