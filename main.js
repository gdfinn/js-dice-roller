let diceInput = document.querySelector("#dicenumber");
let rollButton = document.querySelector("#roll-button");
let allRollsButton = document.querySelector("#all-rolls-button");
let rollList = document.querySelector("#roll-list");
let dieRolls = [];
let totalPlaceholder = document.querySelector("#total");
let reset = document.querySelector("#reset-button");
let dieSidesInput = document.querySelector("#dicesides");

rollButton.addEventListener("click", function () {
  dieRolls = [];
  let diceAmount = diceInput.value;
  let count = 0;
  let sides = dieSidesInput.value;
  console.log(sides);

  while (diceAmount > count) {
    let result = Math.floor(Math.random() * sides) + 1;
    count++;
    dieRolls.push(result);
    //cite: tutorialrepublic.com
    diceTotal = dieRolls.reduce(function (a, b) {
      return a + b;
    }, 0);
  }
  totalPlaceholder.innerHTML = diceTotal;
  console.log(dieRolls);
  console.log(diceTotal);
});

allRollsButton.addEventListener("click", function () {
  rollList.innerHTML = "";
  let count = 0;
  while (dieRolls.length > count) {
    rollList.innerHTML += "<li>" + dieRolls[count] + "</li>";
    count++;
  }
});

reset.addEventListener("click", function () {
  diceInput.value = "";
  totalPlaceholder.innerHTML = 0;
  rollList.innerHTML = "";
  dieSidesInput.value = 6;
});
