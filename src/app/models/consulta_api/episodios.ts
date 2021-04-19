import { Episodio } from '../episodio';

export interface Episodios {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  };
  results: [Episodio];
}
