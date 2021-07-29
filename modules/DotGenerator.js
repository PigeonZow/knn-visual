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
  
    generateCoordinatesFromFile(file) {
        let fileReader = new FileReader(file);
        let csvString = fileReader.result;
        let array = this.csvStringToArray(csvString);
        console.log(array);
    }
  
    csvStringToArray(strData) {
        const objPattern = new RegExp(("(\\,|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\\,\\r\\n]*))"),"gi");
        let arrMatches = null, arrData = [[]];
        while (arrMatches = objPattern.exec(strData)){
            if (arrMatches[1].length && arrMatches[1] !== ",")arrData.push([]);
            arrData[arrData.length - 1].push(arrMatches[2] ? 
                arrMatches[2].replace(new RegExp( "\"\"", "g" ), "\"") :
                arrMatches[3]);
        }
        return arrData;
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