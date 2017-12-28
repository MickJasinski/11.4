var startButton = document.getElementById('Start');
var launchProgram = giveInfo();
startButton.addEventListener('click', launchProgram);


function Phone(brand, model, price, color) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log(this.model + " by " + this.brand + " in " + this.color + ". Now only: $" + this.price + "!");
}

Phone.prototype.displayInfo = function() {
	alert(this.model + " by " + this.brand + " in " + this.color + ". Now only: $" + this.price + "!");
}

function giveInfo() {
	var entry = prompt("Enter model of your choice (iPhone 6S, Galaxy S6, OnePlus)");
	if(entry == "Galaxy S6") {
		return GalaxyS6.displayInfo();
	} else if(entry == "iPhone 6S") {
		return iPhone6S.displayInfo();
	} else if(entry == "OnePlus") {
		return OnePlus.displayInfo();
	} else {
		alert("We cannot find this model in our records.");
	}
}


var GalaxyS6 = new Phone("Samsung", "Galaxy S6", 199, "white");
var iPhone6S = new Phone("Apple", "iPhone 6s", 250, "space gray");
var OnePlus = new Phone("One", "OnePlus", 129, "black");

