import { Dimension } from'../dimension';

export interface Dimensiones {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  };
  result: [Dimension];
}
