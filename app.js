//SECTION State

let ore = 0

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 10,
    quantity: 0,
    mineAbility: 1,
    bonus: 1,
  },

  {
    name: 'drill',
    price: 20,
    quantity: 0,
    mineAbility: 5,
    bonus: 2,
  }
]

let automaticUpgrades = [
  {
    name: 'astronaut',
    price: 10,
    quantity: 0,
    mineAbility: 20,
    bonus: 5,
  },

  {
    name: 'rover',
    price: 20,
    quantity: 0,
    mineAbility: 30,
    bonus: 10,
  }
]

//!SECTION
//SECTION logic 



function mineMoon() {
  const pickaxes = clickUpgrades[0]
  const drills = clickUpgrades[1]
  const pickaxeAmount = pickaxes.mineAbility * pickaxes.quantity
  const drillAmount = drills.mineAbility * drills.quantity
  const astronaut = automaticUpgrades[0]
  const rover = automaticUpgrades[1]
  const astronautAmount = astronaut.MineAbility * astronaut.quantity
  const roverAmount = rover.MineAbility * rover.quantity
  ore += 1 + pickaxeAmount + drillAmount + astronautAmount + roverAmount

  drawOre()
  console.log(ore)
}

// function mineMoon(automaticUpgrades) {
//   const astronaut = automaticUpgrades[0]
//   const rover = automaticUpgrades[1]
//   const astronautAmount = astronaut.MineAbility * astronaut.quantity
//   const roverAmount = rover.MineAbility * rover.quantity
//   ore += 1 + astronautAmount + roverAmount

//   drawOre()
//   console.log(ore)
// }

function buyPickaxe() {
  const pickaxe = clickUpgrades[0]
  if (ore >= pickaxe.price) {
    pickaxe.quantity += 1
    ore -= pickaxe.price
  }

  drawOre()
  console.log(ore)
}

function buyDrill() {
  const drill = clickUpgrades[1]
  if (ore >= drill.price) {
    drill.quantity += 1
    ore -= drill.price
  }
  drawOre()
  console.log(ore)
}

function buyAstronaut() {
  const astronaut = automaticUpgrades[0]
  if (ore >= astronaut.price) {
    astronaut.quantity += 1
    ore -= astronaut.price
  }
  drawOre()
  console.log(ore)
}

function buyRover() {
  const rover = automaticUpgrades[1]
  if (ore >= rover.price) {
    rover.quantity += 1
    ore -= rover.price
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

// function drawClickPurchases() {
//   const clickPurchaseElem = document.getElementById('clickUpgradePurchase')
//   clickPurchaseElem.innerText = `Pickaxe = ${clickUpgrades}`
// }


//!SECTION

drawOre()
// drawClickPurchases()