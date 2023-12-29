import { Joueur } from "./joueur";
import { Move } from "./move";

export class Grille{
    moves: Move[] = [];


    public addMove(move: Move):void{
        this.checkIfCaseAlreadyPlayed(move);
        this.checkIfMoveIsInBound(move);
        this.moves.push(move);
    }

    public getHorizontalNeighbor(position: number[],joueur:Joueur){
        return this.moves.filter(mv => mv.getPlayer() === joueur).map(mv => mv.getPosition()).filter(pos => pos[0] === position[0]);

    }

    public getVerticalNeighbor(position: number[],joueur:Joueur){
        return this.moves.filter(mv => mv.getPlayer() === joueur).map(mv => mv.getPosition()).filter(pos => pos[1] === position[1]);

    }

    public getDiagonalNeighborNeighbor(position: number[], joueur:Joueur){
        return this.moves.filter(mv => mv.getPlayer() === joueur).map(mv => mv.getPosition()).filter(pos => (((pos[1] !== position[1]) && (pos[0] !== position[0])) || (pos[0] === position[0] && pos[1] === position[1])) && (pos !== undefined || pos !== ""));
    }
    
    public  checkMoveIsPlayedMove(move:Move){
        if(this.moves.filter(mv => mv.getPosition()[0] === move.getPosition()[0] && mv.getPosition()[1] === move.getPosition()[1]).length !== 0){
            return true;
        }else return false;
    }


    private checkIfCaseAlreadyPlayed(move:Move){
        if(this.moves.filter(mv => mv.getPosition()[0] === move.getPosition()[0] && mv.getPosition()[1] === move.getPosition()[1]).length !== 0){
            throw Error("already played");
        }
    }

    private checkIfMoveIsInBound(move:Move){
        if(move.getPosition()[0] > 2 || move.getPosition()[1] > 2){
            throw new Error("coup en dehors de la grille")
        }
    }



}