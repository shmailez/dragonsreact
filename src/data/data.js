import { goCave, goStore, fightDragon, goTown } from "../helpers/movies.js";

export const weapons = [
    { name: 'stick', power: 5 },
    { name: 'dagger', power: 30 },
    { name: 'claw hammer', power: 50 },
    { name: 'sword', power: 100 }
  ];
 export const monsters = [
    {
      name: "slime",
      level: 2,
      health: 15
    },
    {
      name: "fanged beast",
      level: 8,
      health: 60
    },
    {
      name: "dragon",
      level: 20,
      health: 300
    }
  ]
 export const locations = [
    {
      name: "town square",
      buttonText: ["store", "cave", "fight"],
      buttonFunctions: [goStore, goCave, fightDragon],
      text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
      name: "store",
      buttonText: ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      buttonFunctions: [goStore, goCave, goTown],
      // "button functions": [buyHealth, buyWeapon, goTown],
      text: "You enter the store."
    },
    {
      name: "cave",
      buttonText: ["Fight slime", "Fight fanged beast", "Go to town square"],
      buttonFunctions: [goStore, goCave, goTown],
      // "button functions": [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters."
    },
    {
      name: "fight",
      buttonText: ["Attack", "Dodge", "Run"],
      buttonFunctions: [goStore, goCave, goTown],
      // "button functions": [attack, dodge, goTown],
      text: "You are fighting a monster."
    },
    {
      name: "kill monster",
      buttonText: ["Go to town square", "Go to town square", "Go to town square"],
      // "button functions": [goTown, goTown, goTown],
      text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
      name: "lose",
      buttonText: ["REPLAY?", "REPLAY?", "REPLAY?"],
      // "button functions": [restart, restart, restart],
      text: "You die. &#x2620;"
    },
    { 
      name: "win", 
      buttonText: ["REPLAY?", "REPLAY?", "REPLAY?"], 
      // "button functions": [restart, restart, restart], 
      text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
    },
    {
      name: "easter egg",
      buttonText: ["2", "8", "Go to town square?"],
      // "button functions": [pickTwo, pickEight, goTown],
      text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
  ];

