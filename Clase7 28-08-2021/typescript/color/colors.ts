interface IColor {
  color: string;
  getColor(): void
}

class Color implements IColor {
  color: string;
  constructor() {
    const r: number = Math.floor(Math.random() * 255)
    const g: number = Math.floor(Math.random() * 255)
    const b: number = Math.floor(Math.random() * 255)
    this.color = `rgb(${r},${g},${b})`
  }

  getColor(): void {
    console.log(this.color)
  }
}

const color: Color = new Color();
color.getColor()