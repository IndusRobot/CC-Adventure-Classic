
var tBiomes = [
	"in a forest",
	"in a pine forest",
	"knee deep in a swamp",
	"in a mountain range",
	"in a desert",
	"in a grassy plain",
	"in frozen tundra",
];

function hasTrees (_nBiome) {
	return _nBiome <= 3;
}

function hasStone (_nBiome) {
	return _nBiome == 4;
}

function hasRivers (_nBiome) {
	return (_nBiome != 3 && _nBiome !=5);
}

var items = {
	"no tea": {
		droppable: false,
		desc: "Pull yourself together man.",
	},
	"a pig": {
		heavy: true,
		creature: true,
		drops: [ "some pork" ],
		aliases: [ "pig" ],
		desc: "The pig has a square nose.",
	},
	"a cow": {
		heavy: true,
		creature: true,
		drops: [ "some beef" ],
		aliases: [ "cow" ],
		desc: "The cow stares at you blankly.",
	},
	"a sheep": {
		heavy: true,
		creature: true,
		hitDrops: [ "some wool" ],
		aliases: [ "sheep" ],
		desc: "The sheep is fluffy.",
	},
	"a chicken": {
		heavy: true,
		creature: true,
		drops: [ "some chicken" ],
		aliases: [ "chicken" ],
		desc: "The chicken looks delicious.",
	},
	"a creeper": {
		heavy: true,
		creature: true,
		monster: true,
		aliases: [ "creeper" ],
		desc: "The creeper needs a hug.",
	},
	"a skeleton": {
		heavy: true,
		creature: true,
		monster: true,
		aliases: [ "skeleton" ],
		nocturnal: true,
		desc: "The head bone's connected to the neck bone, the neck bone's connected to the chest bone, " + 
		"the chest bone's connected to the arm bone, the arm bone's connected to the bow, and the bow is pointed at you.",
	},
	"a zombie": {
		heavy: true,
		creature: true,
		monster: true,
		aliases: [ "zombie" ],
		nocturnal: true,
		desc: "All he wants to do is eat your brains.",
	},
	"a spider": {
		heavy: true,
		creature: true,
		monster: true,
		aliases: [ "spider" ],
		desc: "Dozens of eyes stare back at you.",
	},
	"a cave entrance": {
		heavy: true,
		aliases: [ "cave entrance", "cave", "entrance" ],
		desc: "The entrance to the cave is dark, but it looks like you can climb down.",
	},
	"an exit to the surface": {
		heavy: true,
		aliases: [ "exit to the surface", "exit", "opening" ],
		desc: "You can just see the sky through the opening.",
	},
	"a river": {
		heavy: true,
		aliases: [ "river" ],
		desc: "The river flows majestically towards the horizon. It doesn't do anything else.",
	},
	"some wood": {
		aliases: [ "wood" ],
		material: true,
		desc: "You could easily craft this wood into planks.",
	},
	"some planks": {
		aliases: [ "planks", "wooden planks", "wood planks" ],
		desc: "You could easily craft these planks into sticks.",
	},
	"some sticks": {
		aliases: [ "sticks", "wooden sticks", "wood sticks" ],
		desc: "A perfect handle for torches or a pickaxe.",
	},
	"a crafting table": {
		aliases: [ "crafting table", "craft table", "work bench", "workbench", "crafting bench", "table", ],
		desc: "It's a crafting table. I shouldn't tell you this, but these don't actually do anything in this game, you can craft tools whenever you like.",
	},
	"a furnace": {
		aliases: [ "furnace" ],
		desc: "It's a furnace. Between you and me, these don't actually do anything in this game.",
	},
	"a wooden pickaxe": {
		aliases: [ "pickaxe", "pick", "wooden pick", "wooden pickaxe", "wood pick", "wood pickaxe" ],
		tool: true,
		toolLevel: 1,
		toolType: "pick",
		desc: "The pickaxe looks good for breaking stone and coal.",
	},
	"a stone pickaxe": {
		aliases: [ "pickaxe", "pick", "stone pick", "stone pickaxe" ],
		tool: true,
		toolLevel: 2,
		toolType: "pick",
		desc: "The pickaxe looks good for breaking iron.",
	},
	"an iron pickaxe": {
		aliases: [ "pickaxe", "pick", "iron pick", "iron pickaxe" ],
		tool: true,
		toolLevel: 3,
		toolType: "pick",
		desc: "The pickaxe looks strong enough to break diamond.",
	},
	"a diamond pickaxe": {
		aliases: [ "pickaxe", "pick", "diamond pick", "diamond pickaxe" ],
		tool: true,
		toolLevel: 4,
		toolType: "pick",
		desc: "Best. Pickaxe. Ever.",
	},
	"a wooden sword": {
		aliases: [ "sword", "wooden sword", "wood sword" ],
		tool: true,
		toolLevel: 1,
		toolType: "sword",
		desc: "Flimsy, but better than nothing.",
	},
	"a stone sword": {
		aliases: [ "sword", "stone sword" ],
		tool: true,
		toolLevel: 2,
		toolType: "sword",
		desc: "A pretty good sword.",
	},
	"an iron sword": {
		aliases: [ "sword", "iron sword" ],
		tool: true,
		toolLevel: 3,
		toolType: "sword",
		desc: "This sword can slay any enemy.",
	},
	"a diamond sword": {
		aliases: [ "sword", "diamond sword" ],
		tool: true,
		toolLevel: 4,
		toolType: "sword",
		desc: "Best. Sword. Ever.",
	},
	"a wooden shovel": {
		aliases: [ "shovel", "wooden shovel", "wood shovel" ],
		tool: true,
		toolLevel: 1,
		toolType: "shovel",
		desc: "Good for digging holes.",
	},
	"a stone shovel": {
		aliases: [ "shovel", "stone shovel" ],
		tool: true,
		toolLevel: 2,
		toolType: "shovel",
		desc: "Good for digging holes.",
	},
	"an iron shovel": {
		aliases: [ "shovel", "iron shovel" ],
		tool: true,
		toolLevel: 3,
		toolType: "shovel",
		desc: "Good for digging holes.",
	},
	"a diamond shovel": {
		aliases: [ "shovel", "diamond shovel" ],
		tool: true,
		toolLevel: 4,
		toolType: "shovel",
		desc: "Good for digging holes.",
	},
	"some coal": {
		aliases: [ "coal" ],
		ore: true,
		toolLevel: 1,
		toolType: "pick",
		desc: "That coal looks useful for building torches, if only you had a pickaxe to mine it.",
	},
	"some dirt": {
		aliases: [ "dirt" ],
		material: true,
		desc: "Why not build a mud hut?",
	},
	"some stone": {
		aliases: [ "stone", "cobblestone" ],
		material: true,
		ore: true,
		infinite: true,
		toolLevel: 1,
		toolType: "pick",
		desc: "Stone is useful for building things, and making stone pickaxes.",
	},
	"some iron": {
		aliases: [ "iron" ],
		material: true,
		ore: true,
		toolLevel: 2,
		toolType: "pick",
		desc: "That iron looks mighty strong, you'll need a stone pickaxe to mine it.",
	},
	"some diamond": {
		aliases: [ "diamond", "diamonds" ],
		material: true,
		ore: true,
		toolLevel: 3,
		toolType: "pick",
		desc: "Sparkly, rare, and impossible to mine without an iron pickaxe.",
	},
	"some torches": {
		aliases: [ "torches", "torch" ],
		desc: "These won't run out for a while.",
	},
	"a torch": {
		aliases: [ "torch" ],
		desc: "Fire, fire, burn so bright, won't you light my cave tonight?",
	},
	"some wool": {
		aliases: [ "wool" ],
		material: true,
		desc: "Soft and good for building.",
	},
	"some pork": {
		aliases: [ "pork", "porkchops" ],
		food: true,
		desc: "Delicious and nutritious.",
	},
	"some beef": {
		aliases: [ "beef" ],
		food: true,
		desc: "Delicious and nutritious.",
	},
	"some chicken": {
		aliases: [ "chicken" ],
		food: true,
		desc: "Finger licking good.",
	},
};

var tAnimals = [
	"a pig", "a cow", "a sheep", "a chicken",
];

var tMonsters = [
	"a creeper", "a skeleton", "a zombie", "a spider"
];

var tRecipes = {
	"some planks": [ "some wood" ],
	"some sticks": [ "some planks" ],
	"some sticks": [ "some planks" ],
	"a crafting table": [ "some planks" ],
	"a furnace": [ "some stone" ],
	"some torches": [ "some sticks", "some coal" ],
	
	"a wooden pickaxe": [ "some planks", "some sticks" ],
	"a stone pickaxe": [ "some stone", "some sticks" ],
	"an iron pickaxe": [ "some iron", "some sticks" ],
	"a diamond pickaxe": [ "some diamond", "some sticks" ],

	"a wooden sword": [ "some planks", "some sticks" ],
	"a stone sword": [ "some stone", "some sticks" ],
	"an iron sword": [ "some iron", "some sticks" ],
	"a diamond sword": [ "some diamond", "some sticks" ],

	"a wooden shovel": [ "some planks", "some sticks" ],
	"a stone shovel": [ "some stone", "some sticks" ],
	"an iron shovel": [ "some iron", "some sticks" ],
	"a diamond shovel": [ "some diamond", "some sticks" ],
};

var tGoWest = [
	"(life is peaceful there)",
	"(lots of open air)",
	"(to begin life anew)",
	"(this is what we'll do)",
	"(sun in winter time)",
	"(we will do just fine)",
	"(where the skies are blue)",
	"(this and more we'll do)",
];

var nGoWest = 0;

var bRunning = true;
var tMap = {};
var x = 0, y = 0, z = 0;
var inventory = {
	//"no tea": items["no tea"], //Why was this a thing in the original code?
};

var nTurn = 0;
var nTimeInRoom = 0;
var bInjured = false;

var tDayCycle = [
	"It is daytime.",
	"It is daytime.",
	"It is daytime.",
	"It is daytime.",
	"It is daytime.",
	"It is daytime.",
	"It is daytime.",
	"It is daytime.",
	"The sun is setting.",
	"It is night.",
	"It is night.",
	"It is night.",
	"It is night.",
	"It is night.",
	"The sun is rising.",
];

function getTimeOfDay() {
	return (Math.floor(nTurn / 3) % tDayCycle.length);
}

function isSunny() {
	if (getTimeOfDay() < 10) {
		return true;
	} else {
		return false;
	}
}

function getRoom(x, y, z, dontCreate) {
	tMap[x] = tMap[x] || {};
	tMap[x][y] = tMap[x][y] || {};
	if (!tMap[x][y][z] && dontCreate != true) {
 		var room = {
 			items: {},
 			exits: {},
 			nMonsters: 0,
 		};
		tMap[x][y][z] = room;
		
		if (y == 0) {
			// Room is above ground

			// Pick biome
			room.nBiome = generateNumber( 0, tBiomes.length - 1);
			room.trees = hasTrees( room.nBiome );
		
			// Add animals
			if (generateNumber(1,3) == 1) {
				for (var n = 1; n < generateNumber(1,2); n++) {
					var sAnimal = tAnimals[ generateNumber( 0, tAnimals.length - 1) ];
					room.items[ sAnimal ] = items[ sAnimal ];
				}
			}
			
			// Add surface ore
			if (generateNumber(1,5) == 1 || hasStone( room.nBiome )) {
				room.items[ "some stone" ] = items[ "some stone" ];
			}
			if (generateNumber(1,8) == 1) {
				room.items[ "some coal" ] = items[ "some coal" ];
			}
			if (generateNumber(1,8) == 1 && hasRivers( room.nBiome )) {
				room.items[ "a river" ] = items[ "a river" ];
			}

			// Add exits
			room.exits = {
				["north"]: true,
				["south"]: true,
				["east"]: true,
				["west"]: true,
			}
			if (generateNumber(1,8) == 1) {
				room.exits["down"] = true;
				room.items["a cave entrance"] = items["a cave entrance"];
			}
						
		} else {
			// Room is underground
			// Add exits
			function tryExit( sDir, sOpp, x, y, z ) {
				var adj = getRoom( x, y, z, true );
				if (adj) {
					if (adj.exits[sOpp]) {
						room.exits[sDir] = true;
					}
				} else {
					if (generateNumber(1,3) == 1) {
						room.exits[sDir] = true;
					}
				}
			}
			
			if (y == -1) {
				var above = getRoom( x, y + 1, z );
				if (above.exits["down"]) {
					room.exits["up"] = true;
					room.items["an exit to the surface"] = items["an exit to the surface"];
				}
			} else {
				tryExit( "up", "down", x, y + 1, z );
			}
			
			if (y > -3) {
				tryExit( "down", "up", x, y - 1, z );
			}
			
			tryExit( "east", "west", x - 1, y, z );
			tryExit( "west", "east", x + 1, y, z );
			tryExit( "north", "south", x, y, z + 1 );
			tryExit( "south", "north", x, y, z - 1 );
			
			// Add ores
			room.items[ "some stone" ] = items[ "some stone" ];
			if (generateNumber(1,3) == 1) {
				room.items[ "some coal" ] = items[ "some coal" ];
			}
			if (generateNumber(1,8) == 1) {
				room.items[ "some iron" ] = items[ "some iron" ];
			}
			if (y == -3 && generateNumber(1,15) == 1) {
				room.items[ "some diamond" ] = items[ "some diamond" ];
			}
			
			// Turn out the lights
			room.dark = true;
		}
	}
	return tMap[x][y][z];
}

function itemize( t ) {
	//console.log(t);
	//console.log(Object.keys(t));
	var item = Object.keys(t);
	if (item[0] == undefined) {
		return "nothing";
	}
	
	var text = "";
	/*while (item) {
		//console.log("Running while loop...");
		text = text + item;
		
		var nextItem = next( t, item );
		if (nextItem != undefined) {
			var nextNextItem = next( t, nextItem );
			if (nextNextItem == undefined) {
				text = text + " and ";
			} else {
				text = text + ", ";
			}
		}
		item = nextItem;
	}*/
	
	for (var i = 0; i < item.length; i++) {
		//console.log("Running while loop...");
		//console.log(item);
		text = text + item[i];
		//console.log(text);
		
		//var nextItem = item[i + 1];
		if (item[i + 1] != undefined) {
			//var nextNextItem = next( t, nextItem );
			if (item[i + 2] == undefined) {
				text = text + " and ";
			} else {
				text = text + ", ";
			}
		}
		//item = nextItem;
	}
	
	
	
	//for () {
	return text;
}

/*
local function findItem( _tList, _sQuery )
	for sItem, tItem in pairs( _tList ) do
		if sItem == _sQuery then
			return sItem
		end
		if tItem.aliases ~= nil then
			for n, sAlias in pairs( tItem.aliases ) do
				if sAlias == _sQuery then
					return sItem
				end
			end
		end
	end
	return nil
end
*/

function findItem( _tList, _sQuery ) {
	//console.log("findItem command");
	//console.log(_tList);
	//console.log(_sQuery);
	for (sItem of Object.entries (_tList)) {
		//console.log("sItem:");
		//console.log(sItem);
		if (sItem[0] == _sQuery) {
			return sItem;
		}
		//console.log(sItem[1]);
		//console.log(sItem[1].aliases);
		if (sItem[1].aliases != undefined) {
			for (sAlias of Object.entries(sItem[1].aliases)) {
				//console.log(sAlias[1]);
				if (sAlias[1] == _sQuery) {
					//console.log("sItem:");
					//console.log(sItem);
					return sItem;
				}
			}
		}
	}
	return undefined;
}

var tMatches = {
	"wait": [
		"wait",
		"rest",
		"sit down",
		"sleep",
	],
	"look": [
		"look at the [\\w\\s]+",
		"look at [\\w\\s]+",
		"look",
		"inspect the [\\w\\s]+",
		"inspect [\\w\\s]+",
		"inspect",
	],
	"inventory": [
		"check self",
		"check inventory",
		"inventory",
	],
	"go": [
		"go [\\w\\s]+",
		"go",
		"travel [\\w\\s]+",
		"travel",
		"walk [\\w\\s]+",
		"walk",
		"run [\\w\\s]+",
		"run",
		"move [\\w\\s]+",
		"move",
	],
	"dig": [
		"dig [\\w\\s]+ using [\\w\\s]+",
		"dig [\\w\\s]+ with [\\w\\s]+",
		"dig [\\w\\s]+",
		"dig",
	],
	"take": [
		"pick up the [\\w\\s]+",
		"pick up [\\w\\s]+",
		"pickup [\\w\\s]+",
		"take the [\\w\\s]+",
		"take [\\w\\s]+",
		"take",
		"grab [\\w\\s]+",
		"grab",
	],
	"drop": [
		"put down the [\\w\\s]+",
		"put down [\\w\\s]+",
		"drop the [\\w\\s]+",
		"drop [\\w\\s]+",
		"drop",
	],
	"place": [
		"place the [\\w\\s]+",
		"place [\\w\\s]+",
		"place",
	],
	"cbreak": [
		"punch the [\\w\\s]+",
		"punch [\\w\\s]+",
		"punch",
		"break the [\\w\\s]+ with the [\\w\\s]+",
		"break [\\w\\s]+ with [\\w\\s]+",
		"break the [\\w\\s]+",
		"break [\\w\\s]+",
		"break",
	],
	"mine": [
		"mine the [\\w\\s]+ with the [\\w\\s]+",
		"mine [\\w\\s]+ with [\\w\\s]+",
		"mine [\\w\\s]+",
		"mine",
	],
	"attack": [
		"attack the [\\w\\s]+ with the [\\w\\s]+",
		"attack [\\w\\s]+ with [\\w\\s]+",
		"attack [\\w\\s]+",
		"attack",
		"kill the [\\w\\s]+ with the [\\w\\s]+",
		"kill [\\w\\s]+ with [\\w\\s]+",
		"kill [\\w\\s]+",
		"kill",
		"hit the [\\w\\s]+ with the [\\w\\s]+",
		"hit [\\w\\s]+ with [\\w\\s]+",
		"hit [\\w\\s]+",
		"hit",
	],
	"craft": [
		"craft a [\\w\\s]+",
		"craft some [\\w\\s]+",
		"craft [\\w\\s]+",
		"craft",
		"make a [\\w\\s]+",
		"make some [\\w\\s]+",
		"make [\\w\\s]+",
		"make",
	],
	"build": [
		"build [\\w\\s]+ with [\\w\\s]+",
		"build [\\w\\s]+ out of [\\w\\s]+",
		"build [\\w\\s]+ from [\\w\\s]+",
		"build [\\w\\s]+",
		"build",
	],
	"eat": [
		"eat a [\\w\\s]+",
		"eat the [\\w\\s]+",
		"eat [\\w\\s]+",
		"eat",
	],
	"help": [
		"help me",
		"help",
		"programs",
		"commands",
	],
	"exit": [
		"exit",
		"quit",
		"goodbye",
		"good bye",
		"bye",
		"farewell",
	],
};

var commands = {};

function doCommand(text) {
	//console.log(text);
	if (text == "") {
		commands["noinput"]();
		return;
	}
	
	for (sCommand of Object.entries(tMatches)) {
		//console.log(sCommand);
		for (sMatch of Object.entries(sCommand[1])) {
			//console.log(sMatch);
			var _template = new RegExp(sMatch[1]);
			var tCaptures = text.match(_template);
			//console.log(tCaptures);
			if (tCaptures != undefined) {
				//console.log("Match!");
				var fnCommand = commands[sCommand[0]];
				//console.log(fnCommand);
				//console.log(tCaptures);
				//console.log(sMatch);
				if (tCaptures.length == 1 && tCaptures[0] == sMatch[1]) {
					//console.log("Executing raw command");
					fnCommand();
				} else {
					//console.log("Executing with arguments");
					
					var youths = sMatch[1].split("[\\w\\s]+");
					//console.log(youths);
					//console.log(tCaptures);
					
					for (var i = 0; i < youths.length - 1; i++) {
						if (i == 2) {
							tCaptures[1] = tCaptures[1].split(youths[2]);
							//console.log(tCaptures);
							tCaptures[2] = tCaptures[1][1];
							tCaptures[1] = tCaptures[1][0];
							//console.log(tCaptures);
						} else {
							//console.log("i: " + i);
							//console.log(tCaptures);
							tCaptures = tCaptures.join("");
							tCaptures = tCaptures.split(youths[i]);
						}
					}
					
					for (var i = 0; i < tCaptures.length; i++) {
						while (tCaptures[i].substring(0, 1) == " ") {
							tCaptures[i] = tCaptures[i].substring(1, tCaptures[i].length);
						}
						while (tCaptures[i].substring(tCaptures[i].length - 1, tCaptures[i].length) == " ") {
							tCaptures[i] = tCaptures[i].substring(0, tCaptures[i].length - 1);
						}
					}
					
					//console.log(tCaptures);
					
					if (youths.length == 2) {
						fnCommand(tCaptures[1]);
					} else if (youths.length == 3) {
						fnCommand(tCaptures[0], tCaptures[1]);
					} else if (youths.length == 4) {
						fnCommand(tCaptures[0], tCaptures[1], tCaptures[2]);
					} else {
						writeToText("An error has occurred. Please contact the developer.");
						//console.log("Too many arguments!");
					}
					//console.log(tCaptures);
					
/*
	Do NOT delete in case recent refactor fails!
*/
					
					/*var fnArguments = [];
					var brokenText = tCaptures[0].split(" ");
					var brokenSMatch = sMatch[1].split(" ");
					//console.log(brokenText);
					//console.log(brokenSMatch);
					for (var i = 0; i < brokenText.length; i++) {
						if (brokenText[i] != brokenSMatch[i]) {
							fnArguments.push(brokenText[i]);
						}
					}
					//console.log("\"fnCommand\":");
					//console.log(fnCommand);
					//console.log("\"fnArguments\":");
					//console.log(fnArguments);
					if (fnArguments.length == 0) {
						//console.log("Zero arguments!");
						fnCommand();
					} else if (fnArguments.length == 1) {
						//console.log("One arguments!");
						fnCommand(fnArguments[0]);
					} else if (fnArguments.length == 2) {
						//console.log("Two arguments!");
						fnCommand(fnArguments[0], fnArguments[1]);
					} else if (fnArguments.length == 3) {
						//console.log("Three arguments!");
						fnCommand(fnArguments[0], fnArguments[1], fnArguments[2]);
					}*/
				}
				return;
			}
		}
	}
	commands["badinput"]();
}

commands.wait = function() {
	writeToText( "Time passes..." );
}

commands.look = function( _sTarget ) {
	var room = getRoom( x,y,z );
	//console.log(room);
	if (room.dark) {
		writeToText( "It is pitch dark." );
		return
	}
	//console.log(room);

	if (_sTarget == undefined) {
		// Look at the world
		if (y == 0) {
			writeToText( "You are standing " + tBiomes[room.nBiome] + ". " + tDayCycle[ getTimeOfDay() ]);
			//writeToText( tDayCycle[ getTimeOfDay() ], false);
		} else {
			writeToText( "You are underground. " );
			if (room.exits != undefined) {
				writeToText( "You can travel " + itemize( room.exits ) + ". " );
			} else {
				writeToText();
			}
		}
		if (room.items != undefined) {
			if (room.trees) {
				writeToText( "There is " + itemize( room.items ) + " here. There are trees here. ");
			} else {
				writeToText( "There is " + itemize( room.items ) + " here. " );
			}
		}
		
	} else {
		// Look at stuff
		if (room.trees && (_sTarget == "tree" || _sTarget == "trees")) {
			writeToText( "The trees look easy to break." );
		} else if (_sTarget == "self" || _sTarget == "myself") {
			writeToText( "Very handsome." );
		} else {
			var tItem = undefined;
			//console.log("The \"look at\" bookmark!");
			var sItem = findItem( room.items, _sTarget );
			if (sItem) {
				//console.log(room.items);
				//console.log(room.items[sItem[0]]);
				tItem = room.items[sItem[0]];
			} else {
				sItem = findItem( inventory, _sTarget );
				if (sItem) {
					tItem = inventory[sItem[0]];
				}
			}
			//console.log("sItem");
			//console.log(sItem);
			//console.log("tItem");
			//console.log(tItem);
			
			if (tItem) {
				writeToText( tItem.desc || ("You see nothing special about " + sItem[0] + ".") );
			} else { 
				writeToText( "You don't see any " + _sTarget + " here." );
			}
		}
	}
}

commands.go = function( _sDir ) {
	//var _sDir = "north";
	var room = getRoom( x,y,z );
	if (_sDir == undefined) {
		writeToText( "Go where?" );
		return
	}
	
	if (nGoWest != undefined) {
		if (_sDir == "west") {
			nGoWest = nGoWest + 1;
			if (nGoWest > tGoWest.length - 1) {
				nGoWest = 0;
			}
			writeToText( tGoWest[ nGoWest ] );
		} else {
			if (nGoWest > 0 || nTurn > 6) {
				nGoWest = undefined;
			}
		}
	}
	
	if (room.exits[_sDir] == undefined) {
		writeToText( "You can't go that way." );
		return
	}
	
	if (_sDir == "north") {
		z = z + 1;
	} else if (_sDir == "south") {
		z = z - 1;
	} else if (_sDir == "east") {
		x = x - 1;
	} else if (_sDir == "west") {
		x = x + 1;
	} else if (_sDir == "up") {
		y = y + 1;
	} else if ( _sDir == "down") {
		y = y - 1
	} else {
		writeToText( "I don't understand that direction." );
		return
	}
	
	nTimeInRoom = 0;
	doCommand( "look" );
	
}

commands.dig = function( _sDir, _sTool ) {
	var room = getRoom( x,y,z );
	if (_sDir == undefined) {
		writeToText( "Dig where?" );
		return
	}
	
	var sTool = undefined;
	var tTool = undefined;
	if (_sTool != undefined) {
		sTool = findItem( inventory, _sTool );
		if (!sTool) {
			writeToText( "You're not carrying a " + _sTool + "." );
			return
		}
		tTool = inventory[ sTool[0] ];
	}
	
	//console.log(sTool);
	//console.log(tTool);
	var room = getRoom( x, y, z );
	var bActuallyDigging = (room.exits[ _sDir ] != true);
	if (bActuallyDigging) {
		if (sTool == undefined || tTool.toolType != "pick") {
			writeToText( "You need to use a pickaxe to dig through stone." );
			return
		}
	}
	
	if (_sDir == "north") {
		room.exits["north"] = true;
		z = z + 1;
		getRoom( x, y, z ).exits["south"] = true;

	} else if (_sDir == "south") {
		room.exits["south"] = true;
		z = z - 1;
		getRoom( x, y, z ).exits["north"] = true;
		
	} else if (_sDir == "east") {
		room.exits["east"] = true;
		x = x - 1;
		getRoom( x, y, z ).exits["west"] = true;
		
	} else if (_sDir == "west") {
		room.exits["west"] = true;
		x = x + 1;
		getRoom( x, y, z ).exits["east"] = true;
		
	} else if (_sDir == "up") {
		if (y == 0) {
			writeToText( "You can't dig that way." );
			return
		}

		room.exits["up"] = true;
		if (y == -1) {
			room.items[ "an exit to the surface" ] = items[ "an exit to the surface" ];
		}
		y = y + 1;
		
		room = getRoom( x, y, z );
		room.exits["down"] = true;
		if (y == 0) {
			room.items[ "a cave entrance" ] = items[ "a cave entrance" ];
		}
		
	} else if (_sDir == "down") {
		if (y <= -3) {
			writeToText( "You hit bedrock." );
			return
		}

		room.exits["down"] = true;
		if (y == 0) {
			room.items[ "a cave entrance" ] = items[ "a cave entrance" ];
		}
		y = y - 1;
		
		room = getRoom( x, y, z );
		room.exits["up"] = true;
		if (y == -1) {
			room.items[ "an exit to the surface" ] = items[ "an exit to the surface" ];
		}
		
	} else {
		writeToText( "I don't understand that direction." )
		return
	}
	
	//
	if (bActuallyDigging) {
		if ((_sDir == "down" && y == -1) ||
		   (_sDir == "up" && y == 0)) {
			inventory[ "some dirt" ] = items[ "some dirt" ];
			inventory[ "some stone" ] = items[ "some stone" ];
			writeToText( "You dig " + _sDir + " using " + sTool[0] + " and collect some dirt and stone." );
		} else {
			inventory[ "some stone" ] = items[ "some stone" ];
			writeToText( "You dig " + _sDir + " using " + sTool[0] + " and collect some stone." );
		}
	}
	
	nTimeInRoom = 0;
	doCommand( "look" );
}

commands.inventory = function() {
	writeToText( "You are carrying " + itemize( inventory ) + "." );
	//console.log(inventory);
}

commands.drop = function( _sItem ) {
	if (_sItem == undefined) {
		writeToText( "Drop what?" );
		return
	}
	
	var room = getRoom( x,y,z );
	var sItem = findItem( inventory, _sItem );
	if (sItem) {
		var tItem = inventory[ sItem[0] ];
		if (tItem.droppable == false) {
			writeToText( "You can't drop that." );
		} else {
			room.items[ sItem[0] ] = tItem;
			delete inventory[ sItem[0] ];
			writeToText( "Dropped." );
		}
	} else {
		writeToText( "You don't have a " + _sItem + "." );
	}
}

commands.place = function( _sItem ) {
	if (_sItem == undefined) {
		writeToText( "Place what?" );
		return
	}
	
	if (_sItem == "torch" || _sItem == "a torch") {
		var room = getRoom( x,y,z );
		if (inventory["some torches"] || inventory["a torch"]) {
			delete inventory["a torch"];
			room.items["a torch"] = items["a torch"];
			if (room.dark) {
				writeToText( "The cave lights up under the torch flame." );
				room.dark = false;
			} else if ( y == 0 && !isSunny()) {
				writeToText( "The night gets a little brighter." );
			} else {
				writeToText( "Placed." );
			}
		} else {
			writeToText( "You don't have torches." );
		}
		return
	}
	
	commands.drop( _sItem );
}

commands.take = function( _sItem ) {
	if (_sItem == undefined) {
		writeToText( "Take what?" );
		return
	}

	var room = getRoom( x,y,z );
	//console.log("[	Take Bookmark	]");
	//console.log(room.items);
	//console.log(_sItem);
	var sItem = findItem( room.items, _sItem );
	//console.log("[	END Take Bookmark	]");
	if (sItem) {
	//console.log(room.items);
	//console.log(sItem);
	//console.log(sItem[0]);
		var tItem = room.items[ sItem[0] ];
		//console.log(tItem);
		if (tItem.heavy == true) {
			writeToText( "You can't carry " + sItem[0] + "." );
		} else if (tItem.ore == true) {
			writeToText( "You need to mine this ore." );
		} else {
			if (tItem.infinite != true) {
				delete room.items[ sItem[0] ];
			}
			inventory[ sItem[0] ] = tItem;
			
			if (inventory["some torches"] && inventory["a torch"]) {
				delete inventory["a torch"];
			}
			if (sItem[0] == "a torch" && y < 0) {
				room.dark = true;
				writeToText( "The cave plunges into darkness." );
			} else {
				writeToText( "Taken." );
			}
		}
	} else {
		writeToText( "You don't see a " + _sItem + " here." );
	}
}

commands.mine = function( _sItem, _sTool ) {
	//console.log(_sItem);
	if (_sItem == undefined) {
		writeToText( "Mine what?" );
		return
	}
	if (_sTool == undefined) {
		writeToText( "Mine " + _sItem + " with what?" );
		return
	}	
	commands.cbreak( _sItem, _sTool );
}

commands.attack = function( _sItem, _sTool ) {
	if (_sItem == undefined) {
		writeToText( "Attack what?" );
		return
	}
	commands.cbreak( _sItem, _sTool );
}

commands.cbreak = function( _sItem, _sTool ) {
	if (_sItem == undefined) {
		writeToText( "Break what?" );
		return
	}
	
	var sTool = undefined;
	if (_sTool != undefined) {
		sTool = findItem( inventory, _sTool );
		if (sTool == undefined) {
			writeToText( "You're not carrying a " + _sTool + "." );
			return
		}
	}

	var room = getRoom( x,y,z );
	if (_sItem == "tree" || _sItem == "trees" || _sItem == "a tree") {
		if (room.trees) {
			//writeToText( "The tree breaks into blocks of wood." );
			//room.items[ "some wood" ] = items[ "some wood" ];
			writeToText( "The tree breaks into blocks of wood, which you pick up.");
			inventory[ "some wood" ] = items[ "some wood" ];
			return;
		} else {
			writeToText("You don't see any trees here.");
			return;
		}
	} else if (_sItem == "self" || _sItem == "myself") {
		/*if term.isColour() then
			term.setTextColour( colours.red )
		end*/
		//bInjured = true;
		writeToText( "You have died." );
		writeToText( "Score: &e0" );
		deathAnimation();
		/*term.setTextColour( colours.white )*/
		bRunning = false;
		return
	}
	
	var sItem = findItem( room.items, _sItem );
	//console.log("	attack bookmark");
	//console.log(sItem);
	//console.log(room.items);
	//console.log(room.items[ sItem[0] ]);
	if (sItem) {
		var tItem = room.items[ sItem[0] ];
		if (tItem.ore == true) {
			// Breaking ore
			if (!sTool) {
				writeToText( "You need a tool to break this ore." );
				return
			}
			//console.log(sTool);
			//console.log(inventory[sTool[0]]);
			var tTool = inventory[ sTool[0] ];
			if (tTool.tool) {
				if (tTool.toolType != tItem.toolType) {
					writeToText( "You need a different kind of tool to break this ore." );
				} else if (tTool.toolLevel < tItem.toolLevel) {
					writeToText( sTool[0]  + " is not strong enough to break this ore." );
				} else {
					writeToText( "The ore breaks, dropping " + sItem[0] + ", which you pick up." );
					inventory[ sItem[0] ] = room.items[ sItem[0] ];
					if (tItem.infinite != true) {
						delete room.items[ sItem[0] ];
					}
				}
			} else {
				writeToText( "You can't break " + sItem[0] + " with " + sTool[0] + ".");
			}
			
		} else if (tItem.creature == true) {
			// Fighting monsters (or pigs)
			var toolLevel = 0;
			var tTool = undefined;
			if (sTool) {
				tTool = inventory[ sTool[0] ];
				//console.log(tTool);
				if (tTool.toolType == "sword") {
					toolLevel = tTool.toolLevel;
				}
			}
						
			var tChances = [ 0.2, 0.4, 0.55, 0.8, 1 ];
			//if (generateNumber(0, 1) <= tChances[ toolLevel + 1 ]) {
			var grabRandom = Math.random();
			//console.log("Attack tool level: " + toolLevel);
			//console.log("grabRandom: " + grabRandom + ",\ntChances[ toolLevel ]: " + tChances[ toolLevel ]);
			if (grabRandom <= tChances[ toolLevel ]) {
				delete room.items[ sItem[0] ];
				writeToText( "The " + tItem.aliases[0] + " dies." );
				
				//console.log(tItem);
				if (tItem.drops) {
					for ( sDrop of Object.entries( tItem.drops )) {
						if (!room.items[sDrop[1]]) {
							writeToText( "The " + tItem.aliases[0] + " dropped " + sDrop[1] + "." );
							room.items[sDrop[1]] = items[sDrop[1]];
						}
					}
				}
				
				if (tItem.monster) {
					room.nMonsters = room.nMonsters - 1;
				}
			} else {
				writeToText( "The " + tItem.aliases[0] + " is injured by your blow." );
			}
			
			if (tItem.hitDrops) {
				for (sDrop of Object.entries( tItem.hitDrops )) {
					if (!room.items[sDrop[1]]) {
						writeToText( "The " + tItem.aliases[0] + " dropped " + sDrop[1] + "." );
						room.items[sDrop[1]] = items[sDrop[1]];
					}
				}
			}
		
		} else {
			writeToText( "You can't break " + sItem[0] + "." );
		}
	} else {
		writeToText( "You don't see a " + _sItem + " here." );
	}
}

commands.craft = function( _sItem ) {
	if (_sItem == undefined) {
		writeToText( "Craft what?" );
		return
	}
	
	if (_sItem == "computer" || _sItem == "a computer") {
		writeToText( "By creating a computer in a computer in a computer, " + 
		"you tear a hole in the spacetime continuum from which no mortal being can escape." );
		/*if term.isColour() then
			term.setTextColour( colours.red )
		end*/
		writeToText( "You have died." );
		writeToText( "Score: &e0" );
		deathAnimation();
		/*term.setTextColour( colours.white )*/
		bRunning = false;
		return
	}
	
	var room = getRoom( x,y,z );
	var sItem = findItem( items, _sItem );
	//console.log(sItem);
	//console.log(sItem[0]);
	//console.log(tRecipes);
	//console.log(tRecipes[sItem[0]]);
	var tRecipe = (sItem && tRecipes[ sItem[0] ]) || undefined;
	//console.log(tRecipe);
	if (tRecipe) {
		for (sReq of Object.entries( tRecipe )) {
			if (inventory[sReq[1]] == undefined) {
				writeToText( "You don't have the items you need to craft " + sItem[0] + "." );
				return
			}
		}
		//console.log("	sReq:");
		//console.log(sReq);
		for (sReq of Object.entries( tRecipe )) {
			delete inventory[sReq[1]];
		}
		inventory[ sItem[0] ] = items[ sItem[0] ];
		if (inventory["some torches"] && inventory["a torch"]) {
			delete inventory["a torch"];
		}
		writeToText( "Crafted." );
	} else {
		if (sItem == undefined) {
			writeToText( "You don't know how to make " + _sItem + "." );
		} else {
			writeToText( "You don't know how to make " + sItem[0] + "." );
		}
	}
}

commands.build = function( _sThing, _sMaterial ) {
	if (_sThing == undefined) {
		writeToText( "Build what?" );
		return
	}
		
	var sMaterial = undefined;
	if (_sMaterial == undefined) {
		for (sItem of Object.entries( inventory )) {
			//console.log(sItem);
			if (sItem[1].material) {
				sMaterial = sItem[0];
				break
			}
		}
		if (sMaterial == undefined) {
			writeToText( "You don't have any building materials." );
			return
		}
	} else {
		sMaterial = findItem( inventory, _sMaterial );
		//console.log(sMaterial);
		//console.log(inventory[sMaterial[0]]);
		if (!sMaterial) {
			writeToText( "You don't have any " + _sMaterial );
			return
		}
		
		if (inventory[sMaterial[0]].material != true) {
			writeToText( sMaterial[0] + " is not a good building material." );
			return
		}
	}
	
	var alias = undefined;
	if (_sThing.substring(0, 2) == "a ") {
		alias = _sThing.substring(2, _sThing.length);
	} else if (_sThing.substring(0, 3) == "an ") {
		alias = _sThing.substring(3, _sThing.length);
	}
	
	var room = getRoom( x,y,z );
	delete inventory[sMaterial[0]];
	room.items[ _sThing ] = {
		heavy: true,
		aliases: [ alias ],
		desc: "As you look at your creation (made from " + sMaterial[0] + "), you feel a swelling sense of pride.",
	}

	writeToText( "Your construction is complete." );
}

commands.help = function() {
	var sText = 
		"Welcome to adventure, the greatest text adventure game on CraftOS. " + 
		"To get around the world, type actions, and the adventure will " + 
		"be read back to you. The actions available to you are go, look, inspect, inventory, " + 
		"take, drop, place, punch, attack, mine, dig, craft, build, eat and exit."
	writeToText( sText );
}

commands.eat = function( _sItem ) {
	if (_sItem == undefined) {
		writeToText( "Eat what?" );
		return
	}

	var sItem = findItem( inventory, _sItem );
	if (!sItem) {
		writeToText( "You don't have any " + _sItem + "." );
		return
	}
	
	var tItem = inventory[sItem[0]];
	if (tItem.food) {
		writeToText( "That was delicious!" );
		delete inventory[sItem[0]];
		
		if (bInjured) {
			writeToText( "You are no longer injured." );
			bInjured = false;
		}
	} else {
		writeToText( "You can't eat " + sItem[0] + "." );
	}
}

commands.exit = function() {
	bRunning = false;
	writeToText("Exiting...");
	deathAnimation();
	setTimeout("getId('body').innerHTML = '';", 2000);
}

commands.badinput = function() {
	var tResponses = [
		"I don't understand.",
		"I don't understand you.",
		"You can't do that.",
		"Nope.",
		"Huh?",
		"Say again?",
		"That's crazy talk.",
		"Speak clearly.",
		"I'll think about it.",
		"Let me get back to you on that one.",
		"That doesn't make any sense.",
		"What?",
	];
	writeToText( tResponses[ generateNumber(0, tResponses.length - 1) ] );
}

commands.noinput = function() {
	var tResponses = [
		"Speak up.",
		"Enunciate.",
		"Project your voice.",
		"Don't be shy.",
		"Use your words.",
	];
	writeToText( tResponses[ generateNumber(0, tResponses.length - 1) ] );
}

function simulate() {
	var bNewMonstersThisRoom = false;
	
	// Spawn monsters in nearby rooms
	for (var sx = -2; sx <= 2; sx++) {
		for (var sy = -1; sy <= 1; sy++) {
			for (var sz = -2; sz <= 2; sz++) {
				var h = y + sy;
				//console.log("sx: " + sx + ", sy: " + sy + ", sz: " + sz + ", h: " + h);
				if (h >= -3 && h <= 0) {
					var room = getRoom( x + sx, h, z + sz );
					
					// Spawn monsters
					if (room.nMonsters < 2 &&
					((h == 0 && !isSunny() && !room.items["a torch"]) || room.dark) &&
					generateNumber(1,6) == 1) {
						//console.log("	Spawning monsters!")
					   
						var sMonster = tMonsters[ generateNumber(0, tMonsters.length - 1) ];
						if (room.items[ sMonster ] == undefined) {
					   		room.items[ sMonster ] = items[ sMonster ];
					   		room.nMonsters = room.nMonsters + 1;
					   		
					   		if (sx == 0 && sy == 0 && sz == 0 && !room.dark) {
					   			writeToText( "From the shadows, " + sMonster + " appears." );
					   			bNewMonstersThisRoom = true;
					   		}
						}
					}
					
					// Burn monsters
					if (h == 0 && isSunny()) {
						
						for (sMonster of Object.entries( tMonsters )) {
							if (room.items[sMonster[1]] && items[sMonster[1]].nocturnal) {
								//console.log("Burned a monster...");
								delete room.items[sMonster[1]];
						   		if (sx == 0 && sy == 0 && sz == 0 && !room.dark) {
						   			writeToText( "With the sun high in the sky, the " + items[sMonster[1]].aliases[0] + " bursts into flame and dies." )
						   		}
						   		room.nMonsters = room.nMonsters - 1;
						   	}
						}
					}
				}
			}
		}
	}
	
	// Make monsters attack
	var room = getRoom( x, y, z );
	if (nTimeInRoom >= 2 && !bNewMonstersThisRoom && room.nMonsters != 0) {
		for (sMonster of Object.entries( tMonsters )) {
			//console.log(sMonster);
			if (room.items[sMonster[1]]) {
				if (generateNumber(1,4) == 1 &&
				   !(y == 0 && isSunny() && (sMonster[1] == "a spider"))) {
					if (sMonster[1] == "a creeper") {
						if (room.dark) {
							writeToText( "A creeper explodes." );
						} else {
							writeToText( "The creeper explodes." );
						}
						delete room.items[sMonster[1]];
						room.nMonsters = room.nMonsters - 1;
					} else {
						if (room.dark) {
							writeToText( "A " + items[sMonster[1]].aliases[0] + " attacks you." );
						} else {
							writeToText( "The " + items[sMonster[1]].aliases[0] + " attacks you." );
						}
					}
					
					if (bInjured) {
						writeToText( "You have died." );
						writeToText( "Score: &e0" );
						deathAnimation();
						bRunning = false;
						return
					} else {
						bInjured = true;
					}
					
					break
				}
			}
		}
	}
	
	// Always print this
	if (bInjured) {
		writeToText( "You are injured." );
	}
	
	// Advance time
	nTurn = nTurn + 1;
	nTimeInRoom = nTimeInRoom + 1;
	
	//Update minimap
	if (getId("toggleMapOverlay").checked == true) {
		generateMap();
	}
}

var tCommandHistory = [];

function adventureCommand(_command) {
	//console.log(_command);
	//tCommandHistory[tCommandHistory.length] = _command;
	
	_command = _command.toLowerCase();
	doCommand(_command || "");
	simulate();
	
}
















