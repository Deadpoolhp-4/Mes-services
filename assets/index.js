function flipCard(cardId) {
    var card = document.getElementById(cardId);
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}
