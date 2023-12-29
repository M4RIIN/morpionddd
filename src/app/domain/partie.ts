import { Grille } from "./grille";
import { Joueur } from "./joueur";
import { Move } from "./move";

export class Partie{
    private grille:Grille = new Grille();
    private joueurs:string[] = ['Joueur1', 'Joueur2'];
    private currentPlayer: Joueur = 'Joueur1';
    private isStarted:boolean = false;
    private winner:string = "";


    constructor(){
    }

    
    public getWinner(){
        return this.winner;
    }

    public getGrille():Grille{
        return this.grille;
    }

    public start():void{
        this.isStarted = true;
        this.grille = new Grille();
    }

    public playMove(move: Move):void{
        this.checkIfGameIsStarted();
        this.checkIfIsCurrentPlayerTurn(move);
        this.grille.addMove(move);
        this.checkHorizontalWinningMove(move);
        this.checkVerticalWinningMove(move);
        this.checkDiagonalWinningMove(move);
        this.changeJoueur();
    }

    public getCurrentPlayer():Joueur{
        return this.currentPlayer;
    }

    public isMoveDone(row:number,col:number){
        this.grille.checkMoveIsPlayedMove(new Move(this.currentPlayer,[row,col]))
    }

    private checkIfGameIsStarted(){
        if(this.isStarted === false){
            throw new Error("game not started yet");
         }
    }

    private checkIfIsCurrentPlayerTurn(move:Move){
        if(move.getPlayer() !== this.currentPlayer){
            throw new Error("is not your turn");
        }
    }

    private checkHorizontalWinningMove(move:Move){
        const neighbors = this.grille.getHorizontalNeighbor(move.getPosition(),move.getPlayer());
        if(neighbors.length === 3){
            this.winner = move.getPlayer();
        }
    }

    private checkVerticalWinningMove(move:Move){
        const neighbors = this.grille.getVerticalNeighbor(move.getPosition(),move.getPlayer());
        if(neighbors.length === 3){
            this.winner = move.getPlayer();
        }
    }

    
    private checkDiagonalWinningMove(move:Move){
        const neighbors = this.grille.getDiagonalNeighborNeighbor(move.getPosition(),move.getPlayer());
        if(neighbors.length === 3){
            this.winner = move.getPlayer();
        }
    }

    private changeJoueur(){
        this.currentPlayer = (this.currentPlayer === 'Joueur1') ? 'Joueur2' : 'Joueur1';
    }

}