import { GameObject } from './GameObject';

export class Router extends GameObject {
  type: 'cross' | 't';

  constructor(type: 'cross' | 't', x: number, y: number) {
    super(x, y);
    this.type = type;
  }

  render(): string {
    return `Router (${this.type}) at (${this.x}, ${this.y})`;
  }
}
