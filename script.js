let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

function makeMove(index) {
  if (gameBoard[index] === "" && !gameOver) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameOver = true;
      document.getElementById("message").textContent = `${gameBoard[a]} wins!`;
      return;
    }
  }

  if (!gameBoard.includes("")) {
    gameOver = true;
    document.getElementById("message").textContent = "It's a tie!";
  }
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  document.getElementById("message").textContent = "";
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}
