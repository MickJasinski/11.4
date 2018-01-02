var startButton = document.getElementById('start');
startButton.addEventListener('click', giveInfo);


function Phone(brand, model, price, color) {
    var self = this;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.applyDiscount(cutValue) {
        Phone.price - cutValue;
    }
}


function giveInfo() {
    var entry = prompt("Enter model of your choice (iPhone 6S, Galaxy S6, OnePlus)");
    if (entry == "Galaxy S6") {
        return galaxyS6.displayInfo();
    } else if (entry == "iPhone 6S") {
        return iPhone6S.displayInfo();
    } else if (entry == "OnePlus") {
        return onePlus.displayInfo();
    } else {
        alert("We cannot find this model in our records.");
    }
}



var galaxyS6 = new Phone("Samsung", "Galaxy S6", 199, "white");
var iPhone6S = new Phone("Apple", "iPhone 6s", 250, "space gray");
var onePlus = new Phone("OnePlus", "One", 129, "black");

Phone.prototype.printInfo = function() {
    console.log(this.model + " by " + this.brand + " in " + this.color + ". Now only: $" + this.price + "!");
}

Phone.prototype.displayInfo = function() {
    alert(this.model + " by " + this.brand + " in " + this.color + ". Now only: $" + this.price + "!");
}