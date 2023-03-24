let size = +prompt("Chessboard size: ");
let board = "";

for (let triangleY = 0; triangleY <= size; triangleY++) {
    for (let triangleX = 0; triangleX <= size; triangleX++) {
        if ((triangleX + triangleY) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }

    board += "\n";
}

console.log(board);

//print() - відкриває принтер))

//рішення з книжки

size = 8;

board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);