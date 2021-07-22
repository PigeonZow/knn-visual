class Drawer {

  constructor(canvas, context) {
    this.context = context;
    this.canvas = canvas
  }

  drawDots(array, color) {
    let x, y;
  
    for (let i = 0; i < array.length; i++) {
      [x, y] = array[i].split(',');
      this.context.fillStyle = color;
      this.context.beginPath();
      this.context.arc(x, y, 5, 0, 2*Math.PI);
      this.context.fill();
    }
  
  }

  drawGrid() {
    // draw grid lines
    context.strokeStyle = 'grey';
    context.lineWidth = 1;
    for (let i = 0; i <= this.canvas.width; i += 100) {
      context.moveTo(i, 0);
      context.lineTo(i, this.canvas.height);
    }
    for (let i = 0; i <= this.canvas.height; i += 100) {
      context.moveTo(0, i);
      context.lineTo(this.canvas.width, i);
    }
    context.stroke();
  }

}
export { Drawer }