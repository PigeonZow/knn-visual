class Drawer {

  constructor(context, windowWidth, windowHeight) {
    this.context = context;
    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
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
    for (let i = 0; i <= dotCanvas.width; i += 100) {
      context.moveTo(i, 0);
      context.lineTo(i, dotCanvas.height);
    }
    for (let i = 0; i <= dotCanvas.height; i += 100) {
      context.moveTo(0, i);
      context.lineTo(dotCanvas.width, i);
    }
    context.stroke();
  }

}
export { Drawer }