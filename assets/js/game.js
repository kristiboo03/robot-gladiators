 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log (
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <=0) {
      window.alert(playerName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }

    // remove player's health by subtracting the amount set in the enemyAttack value
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + 'hs died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + 'still has' + playerHealth + ' health left');
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
// function to start a new game
var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

 for (var i = 0; i < enemyNames.length; i++) {
   // if player is still alive, keep fighting
   if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 asses to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assure the value of the enemyName parameter
    fight(pickedEnemyName);
   }
 
 else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
   }
  }
};

var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!")
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  }
  else {
    window.alert("Thank You for playing Robot Gladiators! Come back soon!");
  }
};
//  after the loop ends, player is either of health or enemies to fight, so run the endGame function
endGame();


// start the game when the page loads 
startGame();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
};

 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

  // Log a resulting message to the console so we know that it worked.

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

// check enemy's health
if (enemyHealth <= 0) {
  window.alert(playerName + " has died!");
} 

else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}

// check player's health
if (playerHealth <=0) {
  window.alert(playerName + " has died!");
}

else {
  window.alert(playerName + " still has " + " health left.");
}

// IF PlAYER CHOSES TO FIGHT, THEN FIGHT 
if (promptFight === "fight" || promptFight === "FIGHT") {
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
  );

  // check enemy's heath
  if (enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
  } else {
    window.alert(enemyHealth + " still has " + enemyHealth + " health left.");
  }
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    //  check player's health 
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  //  if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  window.alert(playerName + " has chosen to skip the fight!")
  
} else {
  window.alert("You need to choose a valid option. Try again!");
}
