console.clear();

import { GetRandomColor } from "./utils/randomColor.js";

import { Circle } from "./components/Circle.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";

const getRandomColor = GetRandomColor();
getRandomColor();

const circle = Circle();
circle();
const pentagon = Pentagon();
Pentagon();
const square = Square();
Square();

const root = document.getElementById("root");

root.append(circle, square, pentagon);
