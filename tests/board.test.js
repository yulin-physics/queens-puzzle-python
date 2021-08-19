let Board = require("../Board.js");
let Piece = require("../Piece.js");

// const test = require('ava');
// const sinon = require('sinon');


// jest.mock('../Piece.js'); 

// beforeEach(() => {
//   // Clear all instances and calls to constructor and all methods:
//   Piece.mockClear();
// });


test("test_ctor_ok", () => {
    let board = new Board(8);
    // t.assert(board.n == 8);
    // t.assert(board.pieces instanceof Set);
    expect(board.n).toBe(8);
    expect(board.pieces).toBeInstanceOf(Set);
})

// const test_ctor_negative_number_error = test;
// test_ctor_negative_number_error("Board size negative?", t=> {
//     // TODO: assert that there is an exception being thrown
//     t.throws(() => { 
//         let board = new Board(-1000);
//     }, {instanceOf: RangeError});
// })

test("test_ctor_error", () => {
    // TODO: assert that there is an exception being thrown
    // t.throws(() => { 
    //     let err_sizes = [-1000, Infinity, Math.log(0), NaN, 0];
    //     for (i of err_sizes) {
    //         let board = new Board(i);
    //     }
    // }, {instanceOf: RangeError});
    
    expect(() => { 
        let err_sizes = [-1000, Infinity, Math.log(0), NaN, 0];
        for (i of err_sizes) {
            let board = new Board(i);
        }
    }).toThrowError(RangeError);
})

test("test_size_ok", () => {
    let sizes = [1, 3, 8, 1000];
    for (i of sizes) {
        let board = new Board(i);
        // t.assert(board.size() == i);
        expect(board.size()).toBe(i);
    }
})

test("test_add_ok", () => {
    let board = new Board(3);
    let piece = new Piece();

    board.add(piece);

    // t.assert(board.allPieces().size == 1);
    // t.assert(board.allPieces().has(piece));
    expect(board.allPieces().size).toBe(1);
    expect(board.allPieces()).toContain(piece);
})

//TODO: const test_remove_ok = test;
test("test_remove_ok ", () => {
    let board = new Board(3);
    let piece = new Piece();

    board.add(piece);
    board.remove(piece);

    expect(board.allPieces().size).toBe(0);
})

test("test_admissiblePlacementFor_true", () => {
    let board = new Board(3);
    let piece1 = new Piece();

    // sinon.mock(piece1).expects("attacks").returns(false);
    jest.spyOn(piece1, "attacks").mockReturnValue(false);
    board.add(piece1)
    // piece1.attacks = jest.fn();
    // piece1.attacks.mockReturnValue(false);

    let piece2 = new Piece();
    // sinon.mock(piece2).expects("attacks").returns(false);
    jest.spyOn(piece2, "attacks").mockReturnValue(false);
    actual = board.admissiblePlacementFor(piece2);

    expect(actual).toBeTruthy();
})

test("test_adminissiblePlacementFor_false1", ()=> {
    let board = new Board(3);
    let piece1 = new Piece();

    // sinon.mock(piece1).expects("attacks").returns(true);
    jest.spyOn(piece1, "attacks").mockReturnValue(true);
    board.add(piece1)

    let piece2 = new Piece();
    // sinon.mock(piece2).expects("attacks").returns(false);
    jest.spyOn(piece2, "attacks").mockReturnValue(false);
    actual = board.admissiblePlacementFor(piece2);

    expect(actual).toBeFalsy();
})

test("test_adminissiblePlacementFor_false2", ()=> {
    let board = new Board(3);
    let piece1 = new Piece();
    
    //sinon.mock(piece1).expects("attacks").returns(false);
    //sinon.replace(piece1, "attacks", sinon.fake.returns(false));
    jest.spyOn(piece1, "attacks").mockReturnValue(false);
    board.add(piece1)

    let piece2 = new Piece();
    //sinon.mock(piece2).expects("attacks").returns(true);
    //sinon.replace(piece2, "attacks", sinon.fake.returns(true));
    jest.spyOn(piece2, "attacks").mockReturnValue(true);
    actual = board.admissiblePlacementFor(piece2);

    expect(actual).toBeFalsy();
})

test("test_adminissiblePlacementFor_false3", ()=> {
    let board = new Board(3);
    let piece1 = new Piece();
    
    // sinon.mock(piece1).expects("attacks").returns(true);
    jest.spyOn(piece1, "attacks").mockReturnValue(true);
    board.add(piece1)

    let piece2 = new Piece();
    // sinon.mock(piece2).expects("attacks").returns(true);
    jest.spyOn(piece2, "attacks").mockReturnValue(true);
    actual = board.admissiblePlacementFor(piece2);

    expect(actual).toBeFalsy();
})
