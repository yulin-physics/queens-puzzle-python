class Piece {
    constructor(){
        this.board = null;
        this.i = null;
        this.j = null;
    }

    isOnBoard(){
        return this.board != null;
    }

    placeOn(board, i, j){
    //How to call isOnBoard? Is () needed?
        if ( !this.isOnBoard()
            && (0 <= i)
            && (i < board.size())
            && (0 <= j)
            && (j < board.size())
            ){
                this.board = board;
                this.i = i;
                this.j = j;
            
                board.add(this);
        }
    }

    removeFromBoard() {
        if (this.isOnBoard()) {
            this.board.remove(this);
            //why both removing and setting null?
            //this.board = null;
        }
    }

    attacks(piece) {
        throw new Error("An abstract method has been invoked!");
    }

    isMindfulOf(piece) {
        return (
            (piece != null)
            && this.isOnBoard()
            && piece.isOnBoard()
            && this.board == piece.board
            && JSON.stringify(this) != JSON.stringify(piece)
        )
    }
    
    rowIndex() {
        if (this.isOnBoard()) {
            return this.i;
        } else {
            return this.UNKNOWN;
        }
    }

    colIndex() {
        if (this.isOnBoard()){
            return this.j;
        } else {
            return this.UNKNOWN;
        }
    }

    //why would calling unknown here work?
    UNKNOWN = -1
}

module.exports = Piece;
// module.exports.Piece = Piece;