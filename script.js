const cardsData = ['📚', '📚', '✏️', '✏️', '🧠', '🧠', '💡', '💡'];
let flippedCards = [];
let matchedPairs = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    const grid = document.getElementById('grid');
    if (!grid) return;

    const shuffled = shuffle([...cardsData]);
    
    shuffled.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.innerText = '?';
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        this.innerText = this.dataset.symbol;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        matchedPairs++;
        flippedCards = [];
        if (matchedPairs === cardsData.length / 2) {
            setTimeout(() => alert('Parabéns! Você completou o desafio! 🎉'), 300);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card1.innerText = '?';
            card2.classList.remove('flipped');
            card2.innerText = '?';
            flippedCards = [];
        }, 800);
    }
}

document.addEventListener('DOMContentLoaded', createBoard);
