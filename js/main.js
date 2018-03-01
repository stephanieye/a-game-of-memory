var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
document.querySelector('.yaymsg').className = 'showmsg';
} else {
document.querySelector('.naymsg').className = 'showmsg';
}
};

var flipCard = function() {

var cardID = this.getAttribute('data-id');
console.log("User flipped " + cards[cardID].rank);

cardsInPlay.push(cards[cardID].rank);

console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);

if (cardsInPlay.length <= 2) {
	this.setAttribute('src', cards[cardID].cardImage);
}

if (cardsInPlay.length === 2) {
	checkForMatch();
	}
};

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard)
	document.getElementById('game-board').appendChild(cardElement);
}
};

createBoard();

var resetButton = document.getElementById('resetButton');
resetButton.onclick = reloadPage;

function reloadPage(){
   window.location.reload();
}