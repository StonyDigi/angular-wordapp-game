import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { GameComponent } from './game/game.component';
import { GamesettingsComponent } from './gamesettings/gamesettings.component';

const routes: Routes = [
  {path: '', redirectTo: 'create', pathMatch: 'full'},
  {path: 'list', component: ListComponent},
  {path: 'create', component: CreateComponent},
  //'game/:limit' <<< limit megadása nélkül nem lehet elindítani a játékot, mert tudni kell a programnak, hogy hány szót hozzon létre!
  {path: 'game/:limit', component: GameComponent},
  {path: 'gamesettings', component: GamesettingsComponent},
  {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
