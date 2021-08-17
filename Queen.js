// import Piece from "./Piece.js"; need to set up a default/named export; commonjs vs ES modules?
//require is not defined in ES module scope, you can use import instead
var Piece = require("./Piece.js");

//No () after Queen class
class Queen extends Piece {
    constructor(){
        super();
        // Piece.__init__(self) ????????
    }

    attacks(piece) {
        let i = this.rowIndex();
        let j = this.colIndex();

        let u = piece.rowIndex;
        let v = piece.colIndex;

        return ( 
            this.isMindfulOf(piece)
            && ((i == u)
                || (j ==v)
                || ((i-j) == (u-v))
                || ((i+j) == (u+v))
            )

        )
    }
}
    
module.exports = Queen;