// import test from 'argparse'
// import Board from "./Board.js";
// import Queen from "./Queen.js";

var Board = require("./Board.js");
var Queen = require("./Queen.js");

// var Board = import("./Board.js");
// var Queen = import("./Queen.js");


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
        
         // for j in range(board.size()):
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
    

// const { ArgumentParser } = require('argparse');
// const { version } = require('./package.json');
 
// let parser = new ArgumentParser({
//   description: "Solve the Queen\'s puzzle of the specified size"
// });
    
// parser.add_argument('-s', '--size', { type: 'int', help: 'an integer for the size of the board and number of queens',  required: true })
// let args = parser.parse_args();

// const yargs = require('yargs');
// yargs.command({
//     command: 'mycommand',
//     describe: 'mydesc',
//     handler: () => { input() } 
//    });

// size = yargs.parse();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Size of square board: ', size => {
    let board = new Board(size);
    console.log(numberOfSolutions(0, board));
    console.log(board.pieces.size, "pieces size")
    //console.log(board.allPieces());
    readline.close();
  });

