import { GameObject } from './GameObject';

export class City extends GameObject {
  name: string;

  constructor(name: string, gridColumn: string, gridRow: string) {
    super(gridColumn, gridRow);
    this.name = name;
  }

  render(): string {
    return `City: ${this.name} at ${this.gridColumn}, ${this.gridRow}`;
  }
}
