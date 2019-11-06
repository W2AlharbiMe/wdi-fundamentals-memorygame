function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const newItem = document.createElement("img");
    newItem.setAttribute("src", "images/back.png");
    newItem.setAttribute("data-id", i);

    newItem.addEventListener("click", flipCard);

    document.getElementById("game-board").appendChild(newItem);
    items.push(newItem);
  }
}

function addCard(rank, suit, cardImage) {
  cards.push({
    rank,
    suit,
    cardImage
  });
}

function checkForMatch() {
  let result = "";
  if (cardsInPlay[0] === cardsInPlay[1]) {
    result = "You found a match!";
  } else {
    result = "Sorry, try again!";
  }

  return result;
}

function reset() {
  // clear selected cards
  cardsInPlay = [];
  // remove elements
  items.forEach(i => i.remove());
  // clear items
  items = [];

  // clear text
  document.getElementById("result").innerText = "";

  // set game status to start
  gameStatus = true;

  createBoard();
}

function flipCard() {
  const cardId = this.getAttribute("data-id");

  if (!gameStatus) return false;

  this.setAttribute("src", cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);

  if (cardsInPlay.length === 2) {
    const result = checkForMatch();
    document.getElementById("result").innerText = result;

    gameStatus = false;
  }
}