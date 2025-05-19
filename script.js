let playerX = true;
cellArr = ["", "", "", "", "", "", "", "", ""];

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", selectCell);
});

let num;
function selectCell() {
  num = this.dataset.cell;
  if (cellArr[num] === "") {
    cellArr[num] = playerX ? "X" : "O";
    this.innerHTML = playerX ? "X" : "O";
    playerX = !playerX;
    setTimeout(1000, checkWin());
  } else {
    alert("Cell already filled!");
  }
}

function checkWin() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cellArr[a] && cellArr[a] === cellArr[b] && cellArr[a] === cellArr[c]) {
      alert(`${cellArr[a]} wins!`);
      fireConfetti(); // 🎆 Trigger fireworks
      return;
    }
  }
}

function fireConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
}

function reset() {
  for (let i = 0; i < cellArr.length; i++) {
    cellArr[i] = "";
  }
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
}

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", reset);
