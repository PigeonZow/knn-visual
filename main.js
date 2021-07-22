import { Drawer } from "./modules/Drawer.js";
import { DotGenerator } from "./modules/DotGenerator.js";

let numDots = 50;
let redDotArray = [];
let blueDotArray = [];

// get DOM canvas element
const dotCanvas = document.getElementById('dot-canvas');
const context = dotCanvas.getContext('2d');
dotCanvas.width = window.innerWidth;
dotCanvas.height = window.innerHeight;

// create Drawer and Generator objects
const drawer = new Drawer(dotCanvas, context);
const dotGenerator = new DotGenerator(dotCanvas, context);

dotGenerator.generateRandomCoordinates(redDotArray, numDots);
// generateRandomCoordinates(blueDotArray, numDots);
drawer.drawDots(redDotArray, "red");


