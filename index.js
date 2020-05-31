var inquirer = require("inquirer");

function DigitalPal() {
  this.hungry = true;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.outside = false;
  this.houseCondition = 100;
}
// methods
DigitalPal.prototype.feed = function () {
  if (this.hungry === true) {
    console.log("That was yummy!");
    this.hungry = false;
    this.sleepy = true;
  } else {
    console.log("I'm not hungry!");
  }
};

// sleep()
DigitalPal.prototype.sleep = function () {
  if (this.sleepy === true) {
    console.log("Zzzzzz");
    this.sleepy = false;
    this.bored = true;
    this.increaseAge();
  } else {
    console.log("I'm not sleepy!");
  }
};

DigitalPal.prototype.play = function () {
  if (this.bored === true) {
    console.log("Yay, let's play!");
    this.bored = false;
    this.hungry = true;
  } else {
    console.log("Not right now. Later?");
  }
};

DigitalPal.prototype.increaseAge = function () {
  this.age += 1;
  console.log(`Happy Birthday to me! I am ${this.age} days old`);
};

DigitalPal.prototype.bark = function () {
  console.log("Woof! Woof!");
};

DigitalPal.prototype.goOutside = function () {
  if (this.outside === false) {
    console.log("Yay, I love the outdoors!");
    this.outside = true;
    this.bark();
  } else {
    console.log("But, we're already outside!");
  }
};

DigitalPal.prototype.goInside = function () {
  if (this.outside === true) {
    console.log("Do we have to? Fine...");
    this.outside = false;
    this.bark();
  } else {
    console.log("But, we're already inside");
  }
};

DigitalPal.prototype.meow = function () {
  console.log("Meow! Meow!");
};

DigitalPal.prototype.destroyFurniture = function () {
  if (this.houseCondition > 0) {
    this.houseCondition -= 10;
    console.log("TAKE THAT, FURNITURE!! MWAHAHAHA");
    this.bored = false;
    this.sleepy = true;
  } else {
    console.log("The house is destroyed");
  }
};

DigitalPal.prototype.buyNewFurniture = function () {
  if (this.houseCondition === 100) {
    console.log("The house is already at 100 health");
  } else {
    this.houseCondition += 50;
    if (this.houseCondition > 100) {
      this.houseCondition = 100;
    }
  }
};

DigitalPal.prototype.showStats = function () {
  console.log({
    Hungry: this.hungry,
    Sleepy: this.sleepy,
    Bored: this.bored,
    Age: this.age,
    Outside: this.outside,
    House_Condition: this.houseCondition + "%",
  });
};

const pet = new DigitalPal();

function promptUser() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
          "Eat",
          "Go to sleep",
          "Play",
          "Meow",
          "Woof",
          "Go outside",
          "Go inside",
          "Destroy furniture",
          "Buy new furniture",
          "Show stats",
          "Quit",
        ],
      },
    ])
    .then(function (res) {
      if (res.choice === "Quit") {
        console.log("You quit the game.");
      } else if (res.choice === "Eat") {
        pet.feed();
        promptUser();
      } else if (res.choice === "Go to sleep") {
        pet.sleep();
        promptUser();
      } else if (res.choice === "Play") {
        pet.play();
        promptUser();
      } else if (res.choice === "Meow") {
        pet.meow();
        promptUser();
      } else if (res.choice === "Woof") {
        pet.bark();
        promptUser();
      } else if (res.choice === "Go outside") {
        pet.goOutside();
        promptUser();
      } else if (res.choice === "Go inside") {
        pet.goInside();
        promptUser();
      } else if (res.choice === "Destroy furniture") {
        pet.destroyFurniture();
        promptUser();
      } else if (res.choice === "Buy new furniture") {
        pet.buyNewFurniture();
        promptUser();
      } else if (res.choice === "Show stats") {
        pet.showStats();
        promptUser();
      }
    });
}

promptUser();
