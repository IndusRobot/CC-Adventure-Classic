


if (window.File && window.FileReader && window.FileList && window.Blob) {
	console.log("All the File APIs are supported.");
} else {
	console.log('The File APIs are not fully supported in this browser.');
}

function saveGame() {
	/*var rawTMap = JSON.stringify(tMap);
	var rawInventory = JSON.stringify(inventory);
	var rawPosition = JSON.stringify({"x": x, "y": y, "z": z});
	
	var packedInformation = "rawTMap" + rawTMap + "rawInventory" + rawInventory + "rawPosition" + rawPosition;*/
	
	var settings = {
		textColor: [getId("trgbr").value, getId("trgbg").value, getId("trgbb").value], 
		backgroundColor: [getId("brgbr").value, getId("brgbg").value, getId("brgbb").value], 
		mapSize: getId("mapSize").value, 
		toggleMapOverlay: getId("toggleMapOverlay").checked,
		consoleLinesLimit: getId("consoleLinesLimit").value,
	};
	
	var packedInformation = {tMap: tMap, inventory: inventory, position: [x, y, z], settings: settings, bInjured: bInjured,};
	
	var textToSave = JSON.stringify(packedInformation); //gets the textarea element and saves its information
	var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"}); //creates a "blob", inputs the information and its format type
	var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob); //something with the URL
	var fileNameToSaveAs = "adventure_save_game.txt"; //gets the FileName input and its value
	
	var downloadLink = document.createElement("a"); //Create anchor tag
	downloadLink.download = fileNameToSaveAs; //assigns property "download" to the anchor
	downloadLink.innerHTML = "Download File"; //gives property "innerHTML" the text "Download File"
	downloadLink.href = textToSaveAsURL; //gives the property "link" a link the browser can read. May look like this: "blob:null/2a9f35b7-2e7f-4fe9-a3b5-e1460bd9639f"
	downloadLink.onclick = destroyClickedElement; //Sets up a listener: on click, the appended "anchor" tag will be removed. 
	downloadLink.style.display = "none"; //Sets the link to not display.
	document.body.appendChild(downloadLink); //Attaches the floating tag to the HTML

	downloadLink.click(); //Clicks it by force
}

function destroyClickedElement(event) {
	document.body.removeChild(event.target); //When the event is triggered, removes the "target" tag from the HTML, reversing appendChild
}


var splicedContent1 = [];
var goodFileContent = "null";


function loadGame() {
	writeToText("");
	writeToText("Loading game file...");
	bRunning = true;
	getId("commandLine").removeAttribute("hidden");
	var fileToLoad = document.getElementById("fileToLoad").files[0]; //gets the file input type, (may look like "Browse...") and gets the file uploaded

	var fileReader = new FileReader(); //reads the file?
	fileReader.onload = function(fileLoadedEvent) {
		var textFromFileLoaded = fileLoadedEvent.target.result; //gets the results from reading and assignes to a variable
		var vInfo = JSON.parse(textFromFileLoaded);
		console.log(vInfo);
		
		tMap = vInfo.tMap;
		inventory = vInfo.inventory;
		x = vInfo.position[0];
		y = vInfo.position[1];
		z = vInfo.position[2];
		
		bInjured = vInfo.bInjured;
		
		getId("trgbr").value = vInfo.settings.textColor[0];
		getId("trgbg").value = vInfo.settings.textColor[1];
		getId("trgbb").value = vInfo.settings.textColor[2];
		getId("trgbr").oninput();
		
		getId("brgbr").value = vInfo.settings.backgroundColor[0];
		getId("brgbg").value = vInfo.settings.backgroundColor[1];
		getId("brgbb").value = vInfo.settings.backgroundColor[2];
		getId("brgbr").oninput();
		
		getId("mapSize").value = vInfo.settings.mapSize;
		rawGridSize = vInfo.settings.mapSize;
		if (vInfo.settings.toggleMapOverlay) {
			getId("toggleMapOverlay").onclick();
			getId("toggleMapOverlay").checked = vInfo.settings.toggleMapOverlay;
		}
		getId("consoleLinesLimit").value = vInfo.settings.consoleLinesLimit;
		consoleLinesLimit = vInfo.settings.consoleLinesLimit;
		
		writeToText("File load complete.");
		writeToText("");
		doCommand("look");
		return;
	}
	fileReader.readAsText(fileToLoad, "UTF-8"); //it'something
	//writeToText("Failed to load. Please contact the developer.");
}


























