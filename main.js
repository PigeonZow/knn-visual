import { Drawer } from "./modules/Drawer.js";
import { DotGenerator } from "./modules/DotGenerator.js";

let numDots = 100;
let redDotArray = [];
let blueDotArray = [];

// get DOM canvas elements
const wrapper = document.getElementById('canvas-container');
wrapper.width = window.innerWidth;
wrapper.height = window.innerHeight;

const dotCanvas = document.getElementById('dot-canvas');
dotCanvas.width = window.innerWidth;
dotCanvas.height = window.innerHeight;

const lineCanvas = document.getElementById('line-canvas');
lineCanvas.width = window.innerWidth;
lineCanvas.height = window.innerHeight;

// create Drawer and Generator objects
const drawer = new Drawer(dotCanvas, lineCanvas);
const dotGenerator = new DotGenerator(dotCanvas);

dotGenerator.generateRandomCoordinates(redDotArray, numDots, "red");
dotGenerator.generateRandomCoordinates(blueDotArray, numDots, "blue");
drawer.drawDots(redDotArray);
drawer.drawDots(blueDotArray);

let dotArray = redDotArray.concat(blueDotArray); 

// set up mouse event listeners
var timeout;
lineCanvas.addEventListener("mousemove", e => {
    // try for 60hz
    if (!timeout) {
        timeout = setTimeout(() => {
            timeout = null;
            let mouseX = e.pageX;
            let mouseY = e.pageY;
            drawer.drawKNearestLines(3, dotArray, mouseX, mouseY); 
            // console.log(mouseX, mouseY); 
        }, 16);
    }
});
