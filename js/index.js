"use strict";

const create = document.getElementById("create");
const color = document.getElementById("color");
const mono = document.getElementById("mono");
const clear = document.getElementById("clear");
const mainGrid = document.querySelector(".main__grid");

const gridDiv = document.createElement("div");

gridDiv.id = "etchASketch";

mainGrid.appendChild(gridDiv);
