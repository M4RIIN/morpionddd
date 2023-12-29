import { Joueur } from "./joueur";

export class Move{
       private player: Joueur
       private position: number[];

       constructor(player: Joueur, position: number[]){
        this.player = player;
        this.position = position;
       }

       public getPosition():number[]{
              return this.position;
       }

       public getPlayer():Joueur{
              return this.player;
       }
}