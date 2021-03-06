/*
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gameRunning, lastRoll;

init();

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gameRunning = true;
  lastRoll = false;

  document.querySelector('#dice-1').style.display = 'block';
  document.querySelector('#dice-2').style.display = 'block';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1'
  document.getElementById('name-1').textContent = 'Player 2'

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

function changePlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('#dice-1').style.display = 'none';
  document.querySelector('#dice-2').style.display = 'none';
}



document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gameRunning) {
    // random number
    var dice1 = Math.floor(Math.random() * 6 ) + 1;
    var dice2 = Math.floor(Math.random() * 6 ) + 1;

  //display result
    // setter - how to set a value
    document.querySelector('#current-' + activePlayer).textContent = dice;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active')
    // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
    // getter - how to take a value
    // var x = document.querySelector('#score-0').textContent;
    var diceDom = document.querySelector('.dice');

    document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
    document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';

  // check if current roll an last roll were both 6
      if (lastRoll === 6 && dice === 6) {
        scores[activePlayer] = 0;
        document.getElementById('score-' + activePlayer).textContent= '0';
        console.log('Double 6 buddy...');
        changePlayer();
      } else {
        //update round score, but only if the roll wasnt a 1
        if (dice !== 1) {
          roundScore += dice;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
          changePlayer();
        }
      }

  }
  // save the last roll variable
  lastRoll = dice;
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if(gameRunning) {
  // add current score to global score
    scores[activePlayer] += roundScore;
  // update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.score-value').value;
    var winningScore;

    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

  // has player won the game?
    if(scores[activePlayer] >= winningScore) {
      gameRunning = false;
      document.getElementById('name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
      changePlayer();
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', init);
