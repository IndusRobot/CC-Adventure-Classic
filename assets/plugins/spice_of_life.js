

//Add new command matches
tMatches["wait"].push("rest");
tMatches["wait"].push("sit down");
tMatches["wait"].push("sleep");
tMatches["take"].push("grab [\\w\\s]+");
tMatches["take"].push("grab");
//tMatches["build"].unshift("build [\\w\\s]+ with [\\w\\s]+"); //Added to classic game
tMatches["help"].push("programs");
tMatches["help"].push("commands");

/*//Moved to debug_spawn.js
//Add limited inspect time
tMatches.time = [
	"time",
];

commands.time = function() {
	writeToText(tDayCycle[ getTimeOfDay() ]);
}*/

/*//Modify names and descriptions of objects
//Dangerous, changing names breaks game mechanics. 
//Refactor to exclude names before use
tMatches["modify"] = [
	"modify [\\w\\s]+ of [\\w\\s]+ to [\\w\\s]+",
	"modify [\\w\\s]+ of [\\w\\s]+",
	"modify [\\w\\s]+",
	"modify",
	"change [\\w\\s]+ of [\\w\\s]+ to [\\w\\s]+",
	"change [\\w\\s]+ of [\\w\\s]+",
	"change [\\w\\s]+",
	"change",
	"edit [\\w\\s]+ of [\\w\\s]+ to [\\w\\s]+",
	"edit [\\w\\s]+ of [\\w\\s]+",
	"edit [\\w\\s]+",
	"edit",
];

commands.modify = function(_type, _item, _change) {
	console.log(_type);
	console.log(_item);
	console.log(_change);
	if (_type != undefined) {
		if (_item != undefined) {
			var room = getRoom(x, y, z);
			var sItem = findItem(room.items, _item);
			if (sItem != undefined) {
				if (_change != undefined) {
					if (_type == "name" || _type == "tag") {
						room.items[_change] = room.items[sItem[0]];
						//room.items[_change].aliases = [];
						delete room.items[sItem[0]];
						writeToText("Changed the name of " + sItem[0] + " to " + _change + ".");
					} else if (_type == "description" || _type == "desc") {
						room.items[sItem[0]].desc = _change;
						writeToText("Changed the description of " + sItem[0] + " to " + _change + ".");
					} else {
						writeToText("That type is not recognized.");
					}
				} else {
					writeToText("Change the " + _type + " of " + _item + " to what?");
				}
			} else {
				writeToText("You don't see a " + _item + " here.");
			}
		} else {
			writeToText("What item?");
		}
	} else {
		writeToText("Change the name or description of an object.");
		writeToText("Format: modify '_type' of '_item' to '_change'");
	}
}*/

//Return coordinates to player
tMatches["getPosition"] = [
	"coordinates",
	"location",	
	"position",
	"compass",
	"gps",
];

commands.getPosition = function() {
	writeToText("Your position is: x = " + x + ", y = " + y + ", z = " + z + ".");
}

//Create waypoints

items["an obelisk"] = {
	heavy: true,
	desc: "A large pillar made from a glassy, black material.",
	aliases: ["obelisk", "a waypoint", "waypoint"],
}

function spawnWaypoint() {
	var room = getRoom(x,y,z);
	room.items["an obelisk"] = items["an obelisk"];
}

/*
//Add color theme changing
//Outdated, replaced with a settings page

tMatches.textColor = [
	"text color [\\w\\s]+",
	"text [\\w\\s]+",
	"text",
];

tMatches.backgroundColor = [
	"background color [\\w\\s]+",
	"background [\\w\\s]+",
	"background",
	"color [\\w\\s]+",
	"color",
];

commands.textColor = function(_color) {
	if (_color == "reset") {
		getId("consoleWindow").style.color = "white";
		writeToText("Console text color reset");
	} else if (_color == "default") {
		getId("consoleWindow").style.color = "white";
		writeToText("Console text color reset");
	} else if (_color != undefined) {
		getId("consoleWindow").style.color = _color;
		writeToText("Console text color changed.");
	} else {
		writeToText("What color?");
	}
}

commands.backgroundColor = function(_color) {
	if (_color == "reset") {
		getId("body").style.backgroundColor = "rgb(80, 80, 80)";
		writeToText("Background color reset");
	} else if (_color == "default") {
		getId("body").style.backgroundColor = "rgb(80, 80, 80)";
		writeToText("Background color reset");
	} else if (_color == "grey") {
		getId("body").style.backgroundColor = "rgb(80, 80, 80)";
		writeToText("Background color reset");
	} else if (_color == "gray") {
		getId("body").style.backgroundColor = "rgb(80, 80, 80)";
		writeToText("Background color reset");
	} else if (_color != undefined) {
		getId("body").style.backgroundColor = _color;
		writeToText("Background color changed.");
	} else {
		writeToText("What color?");
	}
}
*/


















