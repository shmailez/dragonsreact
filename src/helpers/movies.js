
import { locations } from "../data/data.js";

// function update(locations) {
//     console.log(locations)
// }

export function goTown() {
  return locations[0].name
}  

export function goStore() {
    return locations[1].name
  }
  
export  function goCave() {
    return locations[2].name
  }
  
export function fightDragon() {
    return locations[3].name
  }



  // export function buyHealth() {
  //   if (gold >= 10) {
  //     gold -= 10;
  //     health += 10;
  //     goldText.innerText = gold;
  //     healthText.innerText = health;
  //   } else {
  //     text.innerText = "You do not have enough gold to buy health.";
  //   }
  // }
  
//  export function buyWeapon() {
//     if (currentWeapon < weapons.length - 1) {
//       if (gold >= 30) {
//         gold -= 30;
//         currentWeapon++;
//         goldText.innerText = gold;
//         let newWeapon = weapons[currentWeapon].name;
//         text.innerText = "You now have a " + newWeapon + ".";
//         inventory.push(newWeapon);
//         text.innerText += " In your inventory you have: " + inventory;
//       } else {
//         text.innerText = "You do not have enough gold to buy a weapon.";
//       }
//     } else {
//       text.innerText = "You already have the most powerful weapon!";
//       button2.innerText = "Sell weapon for 15 gold";
//       button2.onclick = sellWeapon;
//     }
//   }