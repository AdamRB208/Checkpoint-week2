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
    price: 20,
    quantity: 0,
    mineAbility: 5,
  }
]

let automaticUpgrades = [
  {
    name: 'astronaut',
    price: 15,
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
  console.log(ore)
}

// NOTE don't apply auto upgrades on our mine function (onclick)
// NOTE write a new function that applies your autoUpgrades to the ore

//needs work
// function automaticMining() {
//   const astronaut = automaticUpgrades[0]
//   const rover = automaticUpgrades[1]
//   const astronautAmount = astronaut.MineAbility * astronaut.quantity
//   const roverAmount = rover.MineAbility * rover.quantity
// setInterval(automaticUpgrades.mineAbility, 3000)
// automaticUpgrades.forEach(automaticUpgrade, ++ ore)
// }

function bankResources() {
  const astronaut = automaticUpgrades[0]
  const rover = automaticUpgrades[1]
  const astronautAmount = astronaut.mineAbility * astronaut.quantity
  const roverAmount = rover.mineAbility * rover.quantity
  ore += astronautAmount + roverAmount

  drawOre()
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

  drawOre()
  drawPickaxePrice()
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
    if (ore <= drill.price) {
      return
    }

  }

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
    if (ore <= astronaut.price) {
      return
    }
  }

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
    if (ore <= rover.price) {
      return
    }
  }



  drawOre()
  console.log(ore)
}



//!SECTION 

//SECTION  Draw 

function drawOre() {
  const oreElem = document.getElementById('oreObtained')
  oreElem.innerText = `ore obtained: ${ore}`

}

function drawPickaxePrice() {
  const pickaxe = clickUpgrades[0]
  const pickaxeElem = document.getElementById('pickaxePrice')
  pickaxeElem.innerText = `pickaxe ${pickaxe.price}`
}


// TODO write functions to draw all stats for upgrades (qty and price), call these draw functions whenever the relevant upgrade is purchased
// TODO write functions that display how much I receive per click/per interval. You already have the code that calculates that in your mine function, recalculate it in a draw function and display it on the page

// function drawClickPurchases() {
//   const clickPurchaseElem = document.getElementById('clickUpgradePurchase')
//   clickPurchaseElem.innerText = `Pickaxe = ${clickUpgrades}`
// }

// TODO write a function (collectAuto) that will add up all of your autoUpgrades (qty * mineAmount) and apply it to your resource (ore)
// TODO call your collectAuto every 3 seconds, start that interval at the bottom of the js sheets (zoo_keeper is a good reference)



//!SECTION

drawOre()
