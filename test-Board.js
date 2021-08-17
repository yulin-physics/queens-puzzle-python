var Board = require("./Board.js");
var Piece = require("./Piece.js");

const test = require('ava');
const sinon = require('sinon');

const test_ctor_ok = test;
test_ctor_ok("Board size and pieces are initialised ok?", t => {
    let board = new Board(8);
    t.assert(board.n == 8);
    t.assert(board.pieces instanceof Set);
})

// const test_ctor_negative_number_error = test;
// test_ctor_negative_number_error("Board size negative?", t=> {
//     // TODO: assert that there is an exception being thrown
//     t.throws(() => { 
//         let board = new Board(-1000);
//     }, {instanceOf: RangeError});
// })

const test_ctor_error = test;
test_ctor_error("Board size infinite?", t => {
    // TODO: assert that there is an exception being thrown
    t.throws(() => { 
        let err_sizes = [-1000, Infinity, Math.log(0), NaN, 0];
        for (i of err_sizes) {
            let board = new Board(i);
        }
    }, {instanceOf: RangeError});
})

const test_size_ok = test;
test_size_ok("Board size property ok?", t => {
    let sizes = [1, 3, 8, 1000];
    for (i of sizes) {
        let board = new Board(i);
        t.assert(board.size() == i);
    }
})

const test_add_ok = test;
test_add_ok("Board adding pieces ok?", t => {
    let board = new Board(3);
    let piece = new Piece();

    board.add(piece);

    t.assert(board.allPieces().size == 1);
    t.assert(board.allPieces().has(piece));
})

//TODO: const test_remove_ok = test;
const test_remove_ok = test;
test_remove_ok("Board removing pieces ok?", t => {
    let board = new Board(3);
    let piece = new Piece();

    board.add(piece);
    board.remove(piece);

    t.assert(board.allPieces().size == 0);
})

const test_admissiblePlacementFor_true = test;
test_admissiblePlacementFor_true("Board admissiblePlacementFor: attacks false false?", t => {
    let board = new Board(3);
    let piece1 = new Piece();
    //TODO: install Sinon for mocking 
    sinon.mock(piece1).expects("attacks").returns(false);
    board.add(piece1)

    let piece2 = new Piece();
    sinon.mock(piece2).expects("attacks").returns(false);
    actual = board.admissiblePlacementFor(piece2);

    expected = true;

    t.assert(actual == expected);
})

const test_adminissiblePlacementFor_false1 = test;
test_adminissiblePlacementFor_false1("Board admissiblePlacementFor: attacks true false?", t=> {
    let board = new Board(3);
    let piece1 = new Piece();
    //TODO: install Sinon for mocking 
    sinon.mock(piece1).expects("attacks").returns(true);
    board.add(piece1)

    let piece2 = new Piece();
    sinon.mock(piece2).expects("attacks").returns(false);
    actual = board.admissiblePlacementFor(piece2);

    expected = false;

    t.assert(actual == expected);
})

const test_adminissiblePlacementFor_false2 = test;
test_adminissiblePlacementFor_false2("Board admissiblePlacementFor: attacks false true?", t=> {
    let board = new Board(3);
    let piece1 = new Piece();
    //TODO: install Sinon for mocking 
    sinon.mock(piece1).expects("attacks").returns(false);
    board.add(piece1)

    let piece2 = new Piece();
    sinon.mock(piece2).expects("attacks").returns(true);
    actual = board.admissiblePlacementFor(piece2);

    expected = false;

    t.assert(actual == expected);
})

const test_adminissiblePlacementFor_false3 = test;
test_adminissiblePlacementFor_false3("Board admissiblePlacementFor: attacks true true?", t=> {
    let board = new Board(3);
    let piece1 = new Piece();
    //TODO: install Sinon for mocking 
    sinon.mock(piece1).expects("attacks").returns(true);
    board.add(piece1)

    let piece2 = new Piece();
    sinon.mock(piece2).expects("attacks").returns(true);
    actual = board.admissiblePlacementFor(piece2);

    expected = false;

    t.assert(actual == expected);
})

//TODO: test for admissible empty board
const test_adminissiblePlacementFor_empty = test;
test_adminissiblePlacementFor_empty("Empty board admissiblePlacementFor ok?", t=> {
    let board = new Board(3);
    let piece = new Piece();

    board.add(piece);
    sinon.mock(piece).expects("attacks").returns(false);
    actual = board.admissiblePlacementFor(piece);

    expected = true;

    t.assert(actual == expected);
})