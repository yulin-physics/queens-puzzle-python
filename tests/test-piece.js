let Board = require("../Board.js");
let Piece = require("../Piece.js");

const test = require('ava');
const sinon = require('sinon');

const test_isOnBoard_true = test;
test_isOnBoard_true("Piece isOnBoard true?", t => {
    let piece = new Piece();
    let board = new Board(3);
    piece.board = board;

    t.assert(piece.isOnBoard());
})

const test_isOnBoard_false = test;
test_isOnBoard_false("Piece isOnBoard false?", t => {
    let piece = new Piece();
    let board = new Board(3);

    t.assert(!piece.isOnBoard());
})