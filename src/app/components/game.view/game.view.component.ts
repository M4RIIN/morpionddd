import { Component } from '@angular/core';
import { Partie } from '../../domain/partie';
import { CommonModule } from '@angular/common';
import { Move } from '../../domain/move';
import { Joueur } from '../../domain/joueur';

@Component({
  selector: 'app-game.view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.view.component.html',
  styleUrl: './game.view.component.scss'
})
export class GameViewComponent {

  game:Partie | undefined;
  array:string[][] =[[],[],[]];

  cellClicked(row:number, cell:number){
    const current = this.game?.getCurrentPlayer();
    this.game?.playMove(new Move(this.game.getCurrentPlayer(),[row,cell]))
    if(current==="Joueur1"){
      this.array[row][cell] = "X"; 
    }else {
      this.array[row][cell] = "O"; 
    }
  }

  newGame(){
    this.array =[[],[],[]]
    this.game = new Partie();
    this.game?.start();
  }
}
