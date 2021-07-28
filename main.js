import { Drawer } from "./modules/Drawer.js";
import { DotGenerator } from "./modules/DotGenerator.js";

let numDots = 50;
let redDotArray = [];
let blueDotArray = [];

// get DOM canvas elements
// const wrapper = document.getElementById('container');
// wrapper.width = window.innerWidth;
// wrapper.height = window.innerHeight;

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
// generateRandomCoordinates(blueDotArray, numDots, "blue");
drawer.drawDots(redDotArray);

// set up mouse event listeners
var timeout;
dotCanvas.addEventListener("mousemove", e => {
    // try for 60hz
    if (!timeout) {
        timeout = setTimeout(() => {
            timeout = null;
            let mouseX = e.pageX;
            let mouseY = e.pageY;
            drawer.drawKNearestLines(3, redDotArray, mouseX, mouseY); 
            // console.log(mouseX, mouseY); 
        }, 16);
    }
});
