import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConexionApiService } from './../../shared/service/conexion-api.service';

import { Episodio } from 'src/app/models/episodio';

@Component({
  selector: 'app-detalle-episodio',
  templateUrl: './detalle-episodio.component.html',
  styleUrls: ['./detalle-episodio.component.css']
})
export class DetalleEpisodioComponent implements OnInit {

  episodio: Episodio;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ConexionApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.obtenerEpisodio(params.id);
    });
  }

  obtenerEpisodio(id: string) {
    this.service.ObtenerEpisodio(id)
    .subscribe(episodio => {
      this.episodio = episodio;
    });
  }
}
