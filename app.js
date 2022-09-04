// VARIABLE DECLARATIONS HERE
const actionArray = ['Rock', 'Paper', 'Scissors'];
const allGameIcons = document.querySelectorAll('#game-icons > .icon > i');
const gameIcons = document.getElementById('game-icons');
const scoreHeader = document.getElementById('score-header');
const tryAgain = document.getElementById('try-again');
// END OF VARIABLE DECLARATIONS HERE -->

// <-- ADD EVENT LISTENERS TO GAME ICONS
allGameIcons.forEach(icn => {
  icn.addEventListener('click', buttonClick);
});
// END OF ADDING EVENT LISTENER TO GAME ICONS -->

// <-- USER VARIABLES HERE
const userScore = document.getElementById('user-score');
const userRock = document.getElementById('user-rock');
const userPaper = document.getElementById('user-paper');
const userScissors = document.getElementById('user-scissors');
let userScoreHolder = 0;
// END OF USER VARIABLES -->

// <-- COMPUTER VARIABLES HERE
const computerScore = document.getElementById('computer-score');
const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');
let computerScoreHolder = 0;
// END OF COMPUTER VARIABLES -->

// <-- ARRAY OF ALL SCORE ICONS
let allIcons = [];
allIcons.push(userRock);
allIcons.push(userPaper);
allIcons.push(userScissors);
allIcons.push(computerRock);
allIcons.push(computerPaper);
allIcons.push(computerScissors);
// END OF ARRAY -->



// <-- RANDOMIZER HERE
function actionRandomizer() {
  return Math.floor(Math.random()*3);
}
// END RANDOMIZER HERE -->

// <-- COMPUTER CHOICE HERE
function computerChoice() {
  return actionArray[actionRandomizer()];
}
// END COMPUTER CHOICE HERE -->

// ADD USER SCORE HERE
function addUserScore(usr) {
  userScoreHolder++;
  userScore.innerHTML = userScoreHolder;
  scoreHeader.innerHTML = 'You win';
  scoreChecker(userScoreHolder, 'User');
}
// END USER SCORE HERE -->

// <-- ADD COMPUTER SCORE HERE
function addComputerScore(cmp) {
  computerScoreHolder++;
  computerScore.innerHTML = computerScoreHolder;
  scoreHeader.innerHTML = 'Computer wins';
  scoreChecker(computerScoreHolder, 'Computer');
}
// END COMPUTER SCORE HERE -->

// RESET ALL HIGHLIGHTED ICONS
function resetHighlight() {
  allIcons.forEach(all => {
    all.style.background = 'none';
  })
}

// <-- FUNCTION TO HIGHLIGHT USER AND COMPUTER CHOICE
function highlightChoice(usr, cmp) {
  resetHighlight();
  if(usr === 'Rock') {
    userRock.style.background = 'gray';
  } else if (usr === 'Paper') {
    userPaper.style.background = 'gray';
  } else if (usr === 'Scissors') {
    userScissors.style.background = 'gray';
  }

  if(cmp === 'Rock') {
    computerRock.style.background = 'gray';
  } else if (cmp === 'Paper') {
    computerPaper.style.background = 'gray';
  } else if (cmp === 'Scissors') {
    computerScissors.style.background = 'gray';
  }
}
// END OF FUNCTION TO HIGHLIGHT -->

// <-- START OF FUNCTION TO CHOOSE A WINNER
function decider(usr,cmp) {
  highlightChoice(usr,cmp);
  if(usr === cmp) {
    scoreHeader.innerHTML = "It's a tie";
  } else {
    switch(usr) {
      case 'Rock':
          if(cmp === 'Paper') {
            addComputerScore();
          } else if (cmp === 'Scissors') {
            addUserScore(usr);
          }
        break;
      case 'Paper':
          if(cmp === 'Rock') {
            addUserScore(usr);
          } else if (cmp === 'Scissors') {
            addComputerScore();
          }
        break;
      case 'Scissors':
          if(cmp === 'Rock') {
            addComputerScore();
          } else if (cmp === 'Paper') {
            addUserScore(usr);
          }
        break;
      default:
        return null;
    }
  }
}
// END OF FUNCTION TO CHOOSE A WINNER -->

// <-- START OF FUNCTION HERE TO STOP IF SCORE IS 5
function scoreChecker(score, who) {
  if(score === 5) {
    gameIcons.style.pointerEvents = 'none';
    tryAgain.style.display = 'inline';
    switch(who) {
      case('User'):
        scoreHeader.innerHTML = 'You have reached 5 pts. You win';
        break;
      case('Computer'):
        scoreHeader.innerHTML = 'Computer has reached 5 pts. Computer wins';
        break;
    }
  }
}
//  END OF FUNCTION HERE TO STOP IF SCORE IS 5 -->
 

// <-- START OF BUTTON ACTION HERE TO DETERMINE WINNER
function buttonClick(e) {
// FUNCTION TO ASSIGN USER INPUT TO ELEMENT IN ARRAY
const userInputChooser = ind => {
  switch(ind) {
    case 'icon-rock':
      return actionArray[0];
    case 'icon-paper':
      return actionArray[1];
    case 'icon-scissors':
      return actionArray[2];
    default:
      return null;
      // will add throw error here
  }
}

// MAKE THEM FIGHT
try {
  decider(userInputChooser(this.id),computerChoice());
} catch(err) {
  console.log(err);
}

}
// END OF BUTTON ACTION HERE -->

// <-- BUTTON TO REFRESH PAGE HERE
tryAgain.addEventListener('click',reload);
// END OF BUTTON TO REFRESH PAGE -->


// <-- FUNCTION TO REFRESH PAGE
function reload() {
  document.location.reload();
}
// END OF FUNCTION TO REFRESH -->