import { GameObject } from './GameObject';

export class Path extends GameObject {
  start: GameObject;
  end: GameObject;

  constructor(start: GameObject, end: GameObject) {
    super(0, 0); // Path does not have a single x, y position
    this.start = start;
    this.end = end;
  }

  // Generate path coordinates between start and end
  generatePath(): { x: number; y: number }[] {
    const path = [];

    let currentX = this.start.x;
    let currentY = this.start.y;

    while (currentX !== this.end.x) {
      path.push({ x: currentX, y: currentY });
      currentX += currentX < this.end.x ? 1 : -1;
    }

    while (currentY !== this.end.y) {
      path.push({ x: currentX, y: currentY });
      currentY += currentY < this.end.y ? 1 : -1;
    }

    return path;
  }

  render(): string {
    return `Path from (${this.start.x}, ${this.start.y}) to (${this.end.x}, ${this.end.y})`;
  }
}
