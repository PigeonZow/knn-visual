class Drawer {

  constructor(dotCanvas, lineCanvas) {
    this.dotCanvas = dotCanvas;
    this.lineCanvas = lineCanvas;

    this.dotContext = dotCanvas.getContext('2d');
    this.lineContext = lineCanvas.getContext('2d');
  }

  drawDots(array) { 
    for (let i = 0; i < array.length; i++) {
      let dot = array[i]
      this.dotContext.fillStyle = dot.color;
      this.dotContext.beginPath();
      this.dotContext.arc(dot.x, dot.y, 5, 0, 2*Math.PI);
      this.dotContext.fill();
    }
  
  }

  // draw lines to k closest dots
  drawKNearestLines(k, array, mouseX, mouseY) {
    // sort the dots from closest to furthest
    array.sort((dotA, dotB) => {
      let xA = Math.abs(dotA.x - mouseX);
      let yA = Math.abs(dotA.y - mouseY);
      let xB = Math.abs(dotB.x - mouseX);
      let yB = Math.abs(dotB.y - mouseY);

      // if sqrt(a) > sqrt(b) then a > b for a, b >= 0
      // so don't need entire calculation for distance between points
      if ((xA*xA + yA*yA) > (xB*xB + yB*yB)) {
        return 1;
      } 
      if ((xA*xA + yA*yA) < (xB*xB + yB*yB)) {
        return -1;
      }
      return 0;
    });
    // array of dots to draw
    let drawArray = array.slice(0, k);
    // console.log(drawArray);

    // draw the lines
    this.lineContext.clearRect(0, 0, this.lineCanvas.width, this.lineCanvas.height);
    this.lineContext.lineWidth = 2;

    for (let i = 0; i < drawArray.length; i++) {
      this.lineContext.beginPath();
      this.lineContext.strokeStyle = drawArray[i].color;
      this.lineContext.moveTo(mouseX, mouseY);
      this.lineContext.lineTo(drawArray[i].x, drawArray[i].y);
      this.lineContext.stroke();
    }
  }

  drawCircleIndicator() {

  }

  drawGrid() {
    // draw grid lines
    this.dotContext.strokeStyle = 'lightgrey';
    this.dotContext.lineWidth = 1;
    for (let i = 0; i <= this.dotCanvas.width; i += 100) {
      this.dotContext.moveTo(i, 0);
      this.dotContext.lineTo(i, this.dotCanvas.height);
    }
    for (let i = 0; i <= this.dotCanvas.height; i += 100) {
      this.dotContext.moveTo(0, i);
      this.dotContext.lineTo(this.dotCanvas.width, i);
    }
    this.dotContext.stroke();
  }

}
export { Drawer }