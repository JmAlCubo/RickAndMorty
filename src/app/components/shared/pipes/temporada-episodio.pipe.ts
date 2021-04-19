import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temporadaEpisodio'
})
export class TemporadaEpisodioPipe implements PipeTransform {

  transform(value: string): string {
    let temporada: number;
    let episodio: number;
    let valor = Array.from(value); 
  
    if( valor[0] === "S" && valor[3] ==="E" ){
      temporada = parseInt(valor[1] + valor[2]);
      episodio = parseInt(valor[4] + valor[5]);
      return `Temporada ${temporada} - Episodio ${episodio}`;
    }
    return value+"!";
  }
}
