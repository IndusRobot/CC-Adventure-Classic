"use strict";

var rawGridSize = 3;

function mapCell(xPos, yPos) {
	return document.getElementsByClassName("row" + xPos)[yPos];
}

function generateMap() {
	var gridSize = (rawGridSize * 2) + 1;
	getId("mapDiagram").innerHTML = "";
	for (var i = 0; i < gridSize; i++) {
		var tr = document.createElement("tr");
		for (var e = 0; e < gridSize; e++) {
			var td = document.createElement("td");
			td.className = "col" + e + " row" + i;
			td.innerHTML = "&nbsp;";
			//td.innerHTML = "youths";
			tr.appendChild(td);
		}
		getId("mapDiagram").appendChild(tr);
	}
	
	//var array1 = [x, y, z];
	//console.log(array1);
	/*array1 = [x - (Math.floor(gridSize / 2)), y, z];
	console.log(array1);*/
	
	/*var tBiomes = [
		"in a forest",
		"in a pine forest",
		"knee deep in a swamp",
		"in a mountain range",
		"in a desert",
		"in a grassy plain",
		"in frozen tundra",
	];*/
	
	var biomeColors = [
		"green",
		"darkgreen",
		"turquoise",
		"darkgrey",
		"yellow",
		"limegreen",
		"white",
	];
	
	for (var i = 0; i < gridSize; i++) {
		//console.log("	i: " + i);
		for (var e = 0; e < gridSize; e++) {
			//console.log("e: " + e);
			var singleRoom = getRoom(x + (Math.floor(gridSize / 2)) - i, y, z + (Math.floor(gridSize / 2)) - e, true);
			//console.log(singleRoom);
			if (singleRoom != undefined) {
				if (y == 0) {
					mapCell(e, i).style.backgroundColor = biomeColors[singleRoom.nBiome];
					if (singleRoom.trees) {
						mapCell(e, i).innerHTML = "^";
					}
					if (findItem(singleRoom.items, "a cave entrance") != undefined) {
						mapCell(e, i).innerHTML = "M";
					}
					if (items["an obelisk"]) {
						if (findItem(singleRoom.items, "an obelisk") != undefined) {
							mapCell(e, i).innerHTML = "I";
						}
					}
				} else {
					//Object.entries(getRoom(x, y, z).exits)[0] == undefined
					if (Object.entries(singleRoom.exits)[0] != undefined) {
						var randGrey = (Object.entries(singleRoom.exits).length + 1) * 30;
						mapCell(e, i).style.backgroundColor = "rgb(" + randGrey + ", " + randGrey + ", " + randGrey + ")";
					} else {
						mapCell(e, i).style.backgroundColor = "rgb(30, 30, 30)";
					}
					if (singleRoom.exits.down) {
						mapCell(e, i).innerHTML = "&darr;"
					}
					if (singleRoom.exits.up) {
						mapCell(e, i).innerHTML = "&uarr;"
					}
				}
			}
			mapCell((Math.floor(gridSize / 2)), (Math.floor(gridSize / 2))).innerHTML = "@";
				//A diagram for proving grid colors
			//mapCell(e, i).style.backgroundColor = "rgb(" + (i * e * 10) + ", " + (i * e * 10) + ", " + (i * e * 10) + ")";
			//console.log("rgb(" + (i * e * 10) + ", " + (i * e * 10) + ", " + (i * e * 10) + ")");
		}
	}
	
}





























