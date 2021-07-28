class DotGenerator {

    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.context;
    }

    // Note: Random dots aren't that suitable for KNN analysis
    generateRandomCoordinates(array, dots, color) {
        for (let i = 0; i < dots; i++) {
            let dot = {
                x: Math.floor(Math.random() * this.canvas.width),
                y: Math.floor(Math.random() * this.canvas.height),
                color: color
            }
            array.push(dot);
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