//SECTION State

let ore = 0

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 10,
    quantity: 0,
    mineAbility: 1,
  },

  {
    name: 'drill',
    price: 15,
    quantity: 0,
    mineAbility: 5,
  }
]

let automaticUpgrades = [
  {
    name: 'astronaut',
    price: 20,
    quantity: 0,
    mineAbility: 20,
  },

  {
    name: 'rover',
    price: 25,
    quantity: 0,
    mineAbility: 30,
  }
]

//!SECTION
//SECTION logic 



function mineMoon() {
  const pickaxes = clickUpgrades[0]
  const drills = clickUpgrades[1]
  const pickaxeAmount = pickaxes.mineAbility * pickaxes.quantity
  const drillAmount = drills.mineAbility * drills.quantity

  ore += 1 + pickaxeAmount + drillAmount

  drawOre()
  // drawClickCounter()
  console.log(ore)
}

// use as reference to draw other upgrade, purchases and click/timer amounts.
function buyPickaxe() {
  const pickaxe = clickUpgrades[0]
  if (ore >= pickaxe.price) {
    pickaxe.quantity += 1
    ore -= pickaxe.price
    if (pickaxe.quantity >= 1) {
      pickaxe.price += 2
    }
    drawOre()
  }

  drawClickPurchases()
  drawPickaxePrice()
  drawOre()
  console.log(ore)

}

function buyDrill() {
  const drill = clickUpgrades[1]
  if (ore >= drill.price) {
    drill.quantity += 1
    ore -= drill.price
    if (drill.quantity >= 1) {
      drill.price += 2
    }
    drawOre()
  }

  drawClickPurchases()
  drawDrillPrice()
  drawOre()
  console.log(ore)
}

function buyAstronaut() {
  const astronaut = automaticUpgrades[0]
  if (ore >= astronaut.price) {
    astronaut.quantity += 1
    ore -= astronaut.price
    if (astronaut.quantity >= 1) {
      astronaut.price += 2
    }
    drawOre()
  }

  drawAutomaticPurchases()
  drawAstronautPrice()
  drawOre()
  console.log(ore)
}

function buyRover() {
  const rover = automaticUpgrades[1]
  if (ore >= rover.price) {
    rover.quantity += 1
    ore -= rover.price
    if (rover.quantity >= 1) {
      rover.price += 2
    }
    drawOre()
  }

  drawAutomaticPurchases()
  drawRoverPrice()
  drawOre()
  console.log(ore)
}



//!SECTION 

//SECTION  Draw 

function drawOre() {
  const oreElem = document.getElementById('oreObtained')
  oreElem.innerText = `ore obtained: ${ore}`

  // drawClickCounter()
}

function drawPickaxePrice() {
  const pickaxe = clickUpgrades[0]
  const pickaxeElem = document.getElementById('pickaxePrice')
  pickaxeElem.innerText = `pickaxe ${pickaxe.price}`
}

function drawDrillPrice() {
  const drill = clickUpgrades[1]
  const drillElem = document.getElementById('drillPrice')
  drillElem.innerText = `drill ${drill.price}`
}

function drawAstronautPrice() {
  const astronaut = automaticUpgrades[0]
  const astronautElem = document.getElementById('astronautPrice')
  astronautElem.innerText = `astronaut ${astronaut.price}`
}

function drawRoverPrice() {
  const rover = automaticUpgrades[1]
  const roverElem = document.getElementById('roverPrice')
  roverElem.innerText = `rover ${rover.price}`
}

function drawClickPurchases() {
  const pickaxePurchasesElem = document.getElementById('pickaxePurchases');
  const drillPurchasesElem = document.getElementById('drillPurchases');

  pickaxePurchasesElem.innerText = `Pickaxe Purchases: ${clickUpgrades[0].quantity}`;
  drillPurchasesElem.innerText = `Drill Purchases: ${clickUpgrades[1].quantity}`;
}

function drawAutomaticPurchases() {
  const astronautPurchasesElem = document.getElementById('astronautPurchases');
  const roverPurchasesElem = document.getElementById('roverPurchases');

  astronautPurchasesElem.innerText = `Astronaut Purchases: ${automaticUpgrades[0].quantity}`;
  roverPurchasesElem.innerText = `Astronaut Purchases: ${automaticUpgrades[1].quantity}`;
}

// function drawClickCounter() {
//   // const clickCounter = clickUpgrades[0].mineAbility + clickUpgrades[1].mineAbility + automaticUpgrades[0].mineAbility + automaticUpgrades[1].mineAbility;

//   const clickCounterElem = document.getElementById('clickCounter');

//   clickCounterElem.innerText = `click Counter: ${clickUpgrades[0].mineAbility + clickUpgrades[1].mineAbility + automaticUpgrades[0].mineAbility + automaticUpgrades[1].mineAbility + clickUpgrades[0].quantity + clickUpgrades[1].quantity + automaticUpgrades[0].quantity + automaticUpgrades[1].quantity}`;


//   drawClickCounter()
// }


// TODO write functions to draw all stats for upgrades (qty and price), call these draw functions whenever the relevant upgrade is purchased
// TODO write functions that display how much I receive per click/per interval. You already have the code that calculates that in your mine function, recalculate it in a draw function and display it on the page


setInterval(updateAutomaticMining, 3000)

function updateAutomaticMining() {
  const astronaut = automaticUpgrades[0];
  const rover = automaticUpgrades[1];

  const astronautAmount = astronaut.mineAbility * astronaut.quantity;
  const roverAmount = rover.mineAbility * rover.quantity;

  ore += astronautAmount + roverAmount

  drawOre()

}

// automaticUpgrades.forEach(automaticUpgrade, ++ore)
//!SECTION

drawOre()
