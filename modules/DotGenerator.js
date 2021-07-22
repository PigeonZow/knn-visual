class DotGenerator {

    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }

    // TODO: Need to generate data that is suitable for KNN, not necessarily random 
    generateRandomCoordinates(array, dots) {
        let x, y;

        for (let i = 0; i < dots; i++) {
            x = Math.floor(Math.random() * this.canvas.width);
            y = Math.floor(Math.random() * this.canvas.height);
            array.push(x + "," + y);
        }
    }
  
    generateCoordinatesFromFile() {

    }
  
    // normalize values in the data to fit between 0 and 1
    normalizeData(array) {
        // find max and min in data
        let max = array[0];
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
            max = array[i];
            } else if (array[i] < min) {
            min = array[i];
            }
        }

        // normalize
        for (let i = 0; i < array.length; i++) {
            array[i] = (array[i] - min) / (max - min);
        }
    }
}
export { DotGenerator }