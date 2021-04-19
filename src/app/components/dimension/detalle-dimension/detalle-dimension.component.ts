import { Component, OnInit } from '@angular/core';
import { Dimension } from 'src/app/models/dimension';

import { ActivatedRoute, Params } from '@angular/router';
import { ConexionApiService } from './../../shared/service/conexion-api.service';

@Component({
  selector: 'app-detalle-dimension',
  templateUrl: './detalle-dimension.component.html',
  styleUrls: ['./detalle-dimension.component.css']
})
export class DetalleDimensionComponent implements OnInit {

  dimension: Dimension;

  constructor(
    private service: ConexionApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.obtenerDimension(params.id);
    });
  }

  obtenerDimension(id: string){
    this.service.ObtenerDimension(id)
    .subscribe( dimension => {
      this.dimension = dimension;
    });
  }

}
