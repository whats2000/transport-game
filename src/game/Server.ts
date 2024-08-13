import { GameObject } from './GameObject';

export class Server extends GameObject {
  constructor(gridColumn: string, gridRow: string) {
    super(gridColumn, gridRow);
  }

  render(): string {
    return `Server at [${this.gridColumn}, ${this.gridRow}]`;
  }
}
