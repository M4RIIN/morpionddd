import { Routes } from '@angular/router';
import { GameViewComponent } from './components/game.view/game.view.component';

export const routes: Routes = [
    {path: '**',component: GameViewComponent}
];
