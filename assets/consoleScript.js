"use strict";

var loremIpsum = [
	"Where does it come from?",
	
	"Contrary to popular belief, Lorem Ipsum is not simply random text.",
	"It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
	"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,",
	"and going through the cites of the word in classical literature, discovered the undoubtable source.",
	"Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC.",
	"This book is a treatise on the theory of ethics, very popular during the Renaissance.",
	"The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
	
	"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
	"Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
	
	"Where does it come from?",
	
	"Contrary to popular belief, Lorem Ipsum is not simply random text.",
	"It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
	"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,",
	"and going through the cites of the word in classical literature, discovered the undoubtable source.",
	"Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC.",
	"This book is a treatise on the theory of ethics, very popular during the Renaissance.",
	"The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
	
	"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
	"Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
];

var consoleLines = [];
var consoleLinesBreak = [];
var consoleLinesLimit = 40;
var keyDevConsole = false;

function getId(id) {
	return document.getElementById(id);
}

function devConsoleLog(message) {
	if (keyDevConsole) {
		//console.log(message);
	}
}

function generateNumber(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

function loremToText() {
	getId("consoleWindow").innerHTML = "This is a modified line of text";
	for (var i = 0; i < loremIpsum.length; i++) {
		getId("consoleWindow").innerHTML += "<br />" + loremIpsum[i];
	}
}

function writeToText() {
	consoleLines[consoleLines.length] = arguments[0];
	
	var _break = arguments[1];
	if (_break != false) {
		_break = true;
	}
	consoleLinesBreak[consoleLinesBreak.length] = _break;
	
	getId("consoleWindow").innerHTML = "";
	
	while (consoleLines.length > consoleLinesLimit) {
		consoleLines.shift();
		consoleLinesBreak.shift();
	}
	
	for (var i = 0; i < consoleLines.length; i++) {
		if (consoleLinesBreak[i] == true) {
			getId("consoleWindow").innerHTML += "<br />";
		}
		getId("consoleWindow").innerHTML += consoleLines[i];
	}
}

function enterCommand() {
	var _arg = getId("commandLine").value
	getId("commandLine").value = "";
	//console.log(_arg);
	writeToText("> " + _arg);
	adventureCommand(_arg);
}

function initializeListeners() {
	/*getId("commandLine").onkeypress = function() {
		if (event.keyCode == 13) {
			getId("commandSubmit").click();
		}
	}*/
	getId("leDiv").onclick = function() {
		getId("commandLine").focus();
		if (settingsKey == true) {
			getId("settingsIcon").onclick();
		}
	}
	
	//Map Button
	var mapKey = false;
	
	getId("map").style.display = "none";
	getId("mapIcon").onclick = function() {
		//console.log(toggleMapOverlayKey);
		if (toggleMapOverlayKey == true) {
			getId("toggleMapOverlay").onclick();
		} else {
			if (mapKey == false) {
				mapKey = true;
				generateMap();
				getId("map").style.display = "initial";
			} else {
				mapKey = false;
				getId("map").style.display = "none";
			}
		}
	}
	
	getId("mapSize").value = rawGridSize;
	getId("mapSize").oninput = function() {
		rawGridSize = getId("mapSize").value;
		if (mapKey) {
			generateMap();
		}
	}
	
	//Toggle Map Overlay
	getId("toggleMapOverlay").checked = false;
	var toggleMapOverlayKey = false;
	
	getId("toggleMapOverlay").onclick = function() {
		if (toggleMapOverlayKey == false) {
			toggleMapOverlayKey = true;
			mapKey = true;
			generateMap();
			getId("map").style.display = "initial";
			getId("map").className = "mapCorner";
			getId("mapDiagram").className = "mapDiagramCorner";
			
		} else {
			getId("toggleMapOverlay").checked = false;
			toggleMapOverlayKey = false;
			getId("map").style.display = "none";
			getId("map").className = "mapOverlay";
			getId("mapDiagram").className = "mapDiagramOverlay";
		}
	}
	
	//Settings Button
	var settingsKey = false;
	
	getId("commandLine").focus();
	getId("settings").style.display = "none";
	getId("settingsIcon").onclick = function() {
		if (settingsKey == false) {
			settingsKey = true;
			getId("settings").style.display = "initial";
		} else {
			settingsKey = false;
			getId("settings").style.display = "none";
		}
	}
	
	//Colors Settings
	getId("trgbr").value = "210";
	getId("trgbg").value = "210";
	getId("trgbb").value = "210";
	
	getId("brgbr").value = "0";
	getId("brgbg").value = "0";
	getId("brgbb").value = "0";
	
	for (var i = 0; i < document.getElementsByClassName("colorInput").length; i++) {
		document.getElementsByClassName("colorInput")[i].oninput = function() {
			getId("consoleWindow").style.color = "rgb(" + getId("trgbr").value + ", " + getId("trgbg").value + ", " + getId("trgbb").value + ")";
			getId("commandLine").style.color = "rgb(" + getId("trgbr").value + ", " + getId("trgbg").value + ", " + getId("trgbb").value + ")";
		}
	}
	
	for (var i = 0; i < document.getElementsByClassName("backgroundColorInput").length; i++) {
		document.getElementsByClassName("backgroundColorInput")[i].oninput = function() {
			getId("body").style.backgroundColor = "rgb(" + getId("brgbr").value + ", " + getId("brgbg").value + ", " + getId("brgbb").value + ")";
		}
	}
	
	//Game saving and loading
	getId("saveGame").onclick = function() {
		saveGame();
	}
	
	getId("loadGame").onclick = function() {
		loadGame();
	}
	
	//Console Lines Limit Setting
	getId("consoleLinesLimit").value = consoleLinesLimit;
	getId("consoleLinesLimit").oninput = function() {
		consoleLinesLimit = parseInt(getId("consoleLinesLimit").value);
	}
}

window.onload = function() {
	writeToText("Disclaimer: The original ComputerCraft \"adventure\" program was not written by me. This has been rewritten and modified in JavaScript.");
	writeToText("Credit goes to Daniel Ratcliffe (Dan200), author of ComputerCraft.");
	writeToText("<a href = 'https://github.com/dan200/ComputerCraft' target = '_blank'>Link to Github.</a> ");
	writeToText("<a href = 'https://github.com/dan200/ComputerCraft/blob/master/LICENSE' target = '_blank'>Link to ComputerCraft Public License.</a>", false);
	writeToText("");
	writeToText("This project is still WIP. Bugs expected, feedback appreciated.");
	writeToText("");

	simulate();
	if (items["an obelisk"]) {
		spawnWaypoint();
	}
	doCommand( "look" );
	
	//That timer in the top left corner
	//var timeOnSiteTimer = setInterval("getId('timeOnSite').innerHTML = parseInt(getId('timeOnSite').innerHTML) + 1", 1000);
	
	initializeListeners();
}

function deathAnimation() {
	getId("commandLine").blur();
	getId("commandLine").setAttribute("hidden", true);
	if (Object.entries(inventory).length != 0) {
		while (Object.entries(inventory).length != 0) {
			var firstObject = Object.entries(inventory)[0][0];
			var room = getRoom(x,y,z);
			room.items[firstObject] = inventory[firstObject];
			delete inventory[firstObject];
		}
	writeToText("The contents of your inventory spill onto the floor");
	}
}

function reviveAnimation() {
	bRunning = true;
	//bInjured = false;
	getId("commandLine").removeAttribute("hidden");
	writeToText("You rise from the grave.");
}















