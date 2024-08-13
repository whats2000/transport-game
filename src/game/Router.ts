import { GameObject } from './GameObject';

export class Router extends GameObject {
  type: 'cross' | 't';

  constructor(type: 'cross' | 't', gridColumn: string, gridRow: string) {
    super(gridColumn, gridRow);
    this.type = type;
  }

  render(): string {
    return `Router (${this.type}) at [${this.gridColumn}, ${this.gridRow}]`;
  }
}
