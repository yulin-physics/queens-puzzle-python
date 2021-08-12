var Board = require("./Board.js");
var Queen = require("./Queen.js");

function range(stop, start = 0, step) {
    let a = [start], b = start;
    while (b < stop) {
        a.push(b += step || 1);
    }
    return a;
}

function numberOfSolutions(i, board) {
    if ( i < board.size()) {
        let queen = new Queen();
        let count = 0;
        
         for (let j of range(board.size())){
            queen.placeOn(board, i, j);
            
            if (board.admissiblePlacementFor(queen)){
                count = count + numberOfSolutions(i + 1, board);
            }
            queen.removeFromBoard()
        }
        
        return count;
            
    } else {
        return 1;
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Size of square board: ', size => {
    let board = new Board(size);
    console.log(numberOfSolutions(0, board));
    console.log(board.allPieces().size);
    readline.close();
});
