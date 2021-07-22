import { Drawer } from "./modules/Drawer.js";

let numDots = 50;
let redDotArray = [];
let blueDotArray = [];

// get DOM canvas element
const dotCanvas = document.getElementById('dot-canvas');
const context = dotCanvas.getContext('2d');
dotCanvas.width = window.innerWidth;
dotCanvas.height = window.innerHeight;

// create Drawer object
const drawer = new Drawer(context, dotCanvas.width, dotCanvas.height);

generateCoordinates(dotCanvas.width, dotCanvas.height, redDotArray, numDots);
generateCoordinates(dotCanvas.width, dotCanvas.height, blueDotArray, numDots);
drawer.drawDots(redDotArray, "red");

// TODO: Need to generate data that is suitable for KNN, not necessarily random 
function generateCoordinates(width, height, array, dots) {
  let x, y;

  for (let i = 0; i < dots; i++) {
    x = Math.floor(Math.random() * width);
    y = Math.floor(Math.random() * height);
    array.push(x + "," + y);
  }
}

// normalize values in the data to fit between 0 and 1
function normalizeData(array) {
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
