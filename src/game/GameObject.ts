export abstract class GameObject {
  gridColumn: string;
  gridRow: string;

  protected constructor(gridColumn: string, gridRow: string) {
    this.gridColumn = gridColumn;
    this.gridRow = gridRow;
  }

  // Abstract method to be implemented by derived classes
  abstract render(): string;
}
