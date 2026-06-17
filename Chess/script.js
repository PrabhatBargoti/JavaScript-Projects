const UserStats = document.querySelector(".user")
const CompStats = document.querySelector(".Computer")
const boardEl = document.querySelector(".board")
const chessBoxEl = document.querySelector(".chess-box")
const initialBoard = [
    ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"], 
    ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"], 
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null, null], 
    ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"], 
    ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"] 
];
const pieceSymbols = {
    "bR": "♜", "bN": "♞", "bB": "♝", "bQ": "♛", "bK": "♚", "bP": "♟",
    "wR": "♖", "wN": "♘", "wB": "♗", "wQ": "♕", "wK": "♔", "wP": "♙"
};

for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
        const box = document.createElement("div")
        box.dataset.row = r;
        box.dataset.col = c;

        const piece = initialBoard[r][c]
        if (piece !== null ){
            box.innerText = pieceSymbols[piece]
            box.classList.add("piece")
        }

        box.classList.add("chess-box")
        if ((r+c) % 2 == 0) {
            box.classList.add("light")
        } else {
            box.classList.add("dark")
        }
        boardEl.appendChild(box)
    }
    
}

let selectedSquare = null;
let selectedRow = null;
let selectedCol = null;

boardEl.addEventListener("click", function(event){
    const clickSq = event.target;
    const r = parseInt(clickSq.dataset.row);
    const c = parseInt(clickSq.dataset.col);

    if (isNaN(r) || isNaN(c)) return;

    console.log("Clicked:", r, c);

    if (selectedSquare) {
        selectedSquare.classList.remove("selected");
    }

    const piece = initialBoard[r][c];

    if (piece !== null) {
        clickSq.classList.add("selected");
        
        selectedSquare = clickSq;
        selectedRow = r;
        selectedCol = c;
    } else {
        selectedSquare = null;
        selectedRow = null;
        selectedCol = null;
    }
});