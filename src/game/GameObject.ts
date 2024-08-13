export abstract class GameObject {
  x: number;
  y: number;

  protected constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // Abstract method to be implemented by derived classes
  abstract render(): string;
}
