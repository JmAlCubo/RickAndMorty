import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    private router: ActivatedRoute,
    private service: ConexionApiService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.ObtenerEpisodio(params.id);
    });
  }

  ObtenerEpisodio(id: string) {
    this.service.ObtenerEpisodio(id)
    .subscribe(episodio => {
      this.episodio = episodio;
    });
  }
}
