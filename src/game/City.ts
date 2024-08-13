import { GameObject } from './GameObject';

export class City extends GameObject {
  name: string;

  constructor(name: string, x: number, y: number) {
    super(x, y);
    this.name = name;
  }

  render(): string {
    return `City: ${this.name} at (${this.x}, ${this.y})`;
  }
}
