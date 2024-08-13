import { GameObject } from './GameObject';

export class Path extends GameObject {
  start: GameObject;
  end: GameObject;

  constructor(start: GameObject, end: GameObject) {
    super('', ''); // gridColumn and gridRow will be managed differently
    this.start = start;
    this.end = end;
  }

  // Function to generate the path between start and end without crashing into other objects
  generatePath(
    existingObjects: GameObject[],
  ): { gridColumn: string; gridRow: string }[] {
    const path = [];

    let currentCol = parseInt(this.start.gridColumn.split(' ')[0]);
    let currentRow = parseInt(this.start.gridRow.split(' ')[0]);
    const endCol = parseInt(this.end.gridColumn.split(' ')[0]);
    const endRow = parseInt(this.end.gridRow.split(' ')[0]);

    // Move horizontally first
    while (currentCol !== endCol) {
      if (!this.isCollision(currentCol, currentRow, existingObjects)) {
        path.push({
          gridColumn: `${currentCol} / span 1`,
          gridRow: `${currentRow} / span 1`,
        });
      }
      currentCol += currentCol < endCol ? 1 : -1;
    }

    // Then move vertically
    while (currentRow !== endRow) {
      if (!this.isCollision(currentCol, currentRow, existingObjects)) {
        path.push({
          gridColumn: `${currentCol} / span 1`,
          gridRow: `${currentRow} / span 1`,
        });
      }
      currentRow += currentRow < endRow ? 1 : -1;
    }

    return path;
  }

  // Helper function to check if a position is occupied
  private isCollision(
    col: number,
    row: number,
    existingObjects: GameObject[],
  ): boolean {
    return existingObjects.some(
      (obj) =>
        parseInt(obj.gridColumn.split(' ')[0]) === col &&
        parseInt(obj.gridRow.split(' ')[0]) === row,
    );
  }

  render(): string {
    return `Path from ${this.start.gridColumn}, ${this.start.gridRow} to ${this.end.gridColumn}, ${this.end.gridRow}`;
  }
}
