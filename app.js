//SECTION State

let ore = 0

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 10,
    quantity: 1,
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


//function mine() {
//  const pickaxe = clickUpgrades[0]
//  if (pickaxe.quantity >= 1) {
//    ore++
//  }

//  const drill = clickUpgrades[1]
//  if (pickaxe.quantity >= 1) {
//    ore++
//  }
//  console.log(ore)
//}


function mineMoon() {
  ore++

  drawOre()

  console.log(ore)
}
// let mineAbility = 0

// clickUpgrades.forEach(clickUpgrade => {
//   if (clickUpgrade.mineAbility >= 1) {
//     ore++
//   }

// })

function buyPickaxe() {
  if (ore >= 10) {
    quantity++
  }

}
console.log(buyPickaxe)

//!SECTION 

//SECTION  Draw 

function drawOre() {
  const oreElem = document.getElementById('oreObtained')
  oreElem.innerText = `ore obtained: ${ore}`

}


//!SECTION

buyPickaxe()
drawOre()
