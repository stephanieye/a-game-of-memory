var confettiPlayers = [];

function makeItConfetti() {
  var confetti = document.querySelectorAll('.confetti');
  
  if (!confetti[0].animate) {
    return false;
  }

  for (var i = 0, len = confetti.length; i < len; ++i) {
    var snowball = confetti[i];
    snowball.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
    var scale = Math.random() * .8 + .2;
    var player = snowball.animate([
      { transform: 'translate3d(' + (i/len*100) + 'vw,0,0) scale(' + scale + ')', opacity: scale },
      { transform: 'translate3d(' + (i/len*100 + 10) + 'vw,100vh,0) scale(' + scale + ')', opacity: 1 }
    ], {
      duration: Math.random() * 3000 + 3000,
      iterations: Infinity,
      delay: -(Math.random() * 5000)
    });
    
    
    confettiPlayers.push(player);
  }
}









var cards = [
{
rank: "redqueen",
suit: "hearts",
cardImage: "cardimages/queen_of_hearts.png"
},
{
rank: "redqueen",
suit: "diamonds",
cardImage: "cardimages/queen_of_diamonds.png"
},
{
rank: "blackking",
suit: "spades",
cardImage: "cardimages/king_of_spades.png"
},
{
rank: "rednine",
suit: "hearts",
cardImage: "cardimages/9_of_hearts.png"
},
{
rank: "redking",
suit: "diamonds",
cardImage: "cardimages/king_of_diamonds.png"
},
{
rank: "blackace",
suit: "spades",
cardImage: "cardimages/ace_of_spades.png"
},
{
rank: "blackqueen",
suit: "spades",
cardImage: "cardimages/queen_of_spades.png"
},
{
rank: "redking",
suit: "hearts",
cardImage: "cardimages/king_of_hearts.png"
},
{
rank: "blackqueen",
suit: "clubs",
cardImage: "cardimages/queen_of_clubs.png"
},
{
rank: "blackking",
suit: "clubs",
cardImage: "cardimages/king_of_clubs.png"
},
];

var cardsInPlay = [];
var cardsRight = [];
var cardsWrong = [];

var checkForMatch = function() {
if (cardsInPlay[0] === cardsInPlay[1] && cardsWrong.length === 0 && cardsRight.length === 6) {
	cardsRight.push(cardsInPlay[0]);
	cardsRight.push(cardsInPlay[1]);
	makeItConfetti();
	document.querySelector('.yaymsg8').className = 'showmsg';
} else if (cardsInPlay[0] === cardsInPlay[1] && cardsWrong.length === 0 && cardsRight.length < 6) {
		cardsRight.push(cardsInPlay[0]);
		cardsRight.push(cardsInPlay[1]);
		document.querySelector('.yaymsg'+cardsInPlay.length).className = 'showmsg';
} else if (cardsInPlay[0] !== cardsInPlay[1] && cardsRight.length < 8) {
		cardsWrong.push(cardsInPlay[0]);
		cardsWrong.push(cardsInPlay[1]);
		document.querySelector('.naymsg').className = 'showmsg';
}
};

var flipCard = function() {
var cardID = this.getAttribute('data-id');
console.log("User flipped " + cards[cardID].rank);
cardsInPlay.unshift(cards[cardID].rank);
console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);
if (cardsWrong.length < 2) {
	this.setAttribute('src', cards[cardID].cardImage);
} 
if (cardsInPlay.length % 2 === 0) {
	checkForMatch();
	}
};

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'cardimages/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
};

createBoard();

var resetButton = document.getElementById('resetButton');
resetButton.onclick = reloadPage;

function reloadPage(){
   window.location.reload();
}



