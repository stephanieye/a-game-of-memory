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
rank: "redking",
suit: "diamonds",
cardImage: "cardimages/king_of_diamonds.png"
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
	cardElement.setAttribute('src', 'cardimages/back.png');
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