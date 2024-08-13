import { GameObject } from './GameObject';

export class Server extends GameObject {
  constructor(x: number, y: number) {
    super(x, y);
  }

  render(): string {
    return `Server at (${this.x}, ${this.y})`;
  }
}
