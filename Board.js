class UniqueSet extends Set {
    constructor(values) {
        super(values);

        const data = [];
        for (let value of this) {
            if (data.includes( JSON.stringify([value.i, value.j]))) {
                this.delete(value);

            } else {
                data.push(JSON.stringify([value.i, value.j]));
            }
        }
    }
  }

class Board {
    constructor(size) {
        this.n = size;
        if( (Math.sign(this.n) != 1) || !isFinite(this.n)) {
            throw new RangeError("The argument size must be a positive integer!")
        }
        
        this.pieces = new Set();
    }
    //no need to use function keyword?
    size(){
        return this.n;
    }

    allPieces(){
        return this.pieces;
    }


    admissiblePlacementFor(piece) {
    //mindful for use of piece and self.pieces
    //for each item in a set
 
        for (let other of this.pieces) {
            if (( other != piece) 
                && (other.attacks(piece) 
                || piece.attacks(other))
                ){  
                    return false;  
            }
        return true;
        }
    }

    

    add(piece) {
        this.pieces.add(piece);
        this.pieces = new UniqueSet(this.pieces);
    }

    remove(piece) {
        this.pieces.delete(piece);
    }
}



module.exports = Board;
