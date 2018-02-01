"use strict";

tMatches["spawn"] = [
	"spawn [\\w\\s]+ in [\\w\\s]+", 
	"spawn [\\w\\s]+ at [\\w\\s]+", 
	"spawn [\\w\\s]+ to [\\w\\s]+",
	"spawn [\\w\\s]+",
	"spawn",
	"give [\\w\\s]+ in [\\w\\s]+",
	"give [\\w\\s]+ at [\\w\\s]+",
	"give [\\w\\s]+ to [\\w\\s]+",
	"give [\\w\\s]+",
	"give",
	//Conflicts with command eat
	/*"create [\\w\\s]+", 
	"create",*/
];

commands.spawn = function(_query, _location) {
	//console.log("commands.spawn(_query): " + _query);
	if (_query == undefined) {
		writeToText( "Spawn what?" );
		return
	} else {
		var _sQuery = findItem(items, _query);
		if (_sQuery != undefined) {
			if (
			_location == "inv" || 
			_location == "self" || 
			_location == "hand" ||
			_location == "pocket" || 
			_location == "backpack"||
			_location == "player"
			) {
				inventory[_sQuery[0]] = items[_sQuery[0]];
				writeToText("Spawned " + _sQuery[0] + " in your inventory.");
			} else {
				var room = getRoom( x,y,z );
				room.items[_sQuery[0]] = items[_sQuery[0]];
				writeToText("Spawned " + _sQuery[0] + " nearby.");
				//doCommand("look");
			}
		} else {
			writeToText("That item does not exist.");
		}
	}
}

tMatches["remove"] = [
	"delete [\\w\\s]+",
	"delete",
	"remove [\\w\\s]+",
	"remove",
	"destroy [\\w\\s]+",
	"destroy",
];

commands.remove = function (_query, _location) {
	if (_query == undefined) {
		writeToText( "Delete what?" );
		return
	} else { 
		_sQuery = findItem(inventory, _query);
		if (_sQuery != undefined) {
			delete inventory[_sQuery[0]];
			writeToText("Removed " + _sQuery[0] + " from your inventory.");
			return;
		}
		var room = getRoom( x,y,z );
		var _sQuery = findItem(room.items, _query);
		if (_sQuery != undefined) {
			delete room.items[_sQuery[0]];
			writeToText("Removed " + _sQuery[0] + " from the area.");
			return;
		}
	}
	writeToText("That item does not exist here.");
}

tMatches["setTime"] = [
	"time set [\\w\\s]+",
	"time [\\w\\s]+",
	"time",
];

commands.setTime = function(_query) {
	if (_query != undefined) {
		if (
		_query == "day" || 
		_query == "daylight" || 
		_query == "daytime" || 
		_query == "dawn"
		) {
			while (!isSunny()) {
				nTurn++;
			}
			writeToText(tDayCycle[ getTimeOfDay() ]);
			return;
		} else if (
		_query == "night" || 
		_query == "nightfall" || 
		_query == "night time" || 
		_query == "nighttime" || 
		_query == "dusk"
		) {
			while (isSunny()) {
				nTurn++;
			}
			writeToText(tDayCycle[ getTimeOfDay() ]);
			return;
		} else {
			writeToText("I do not understand that time.");
			return;
		}
	} else {
		writeToText(tDayCycle[ getTimeOfDay() ]);
	}
}



















