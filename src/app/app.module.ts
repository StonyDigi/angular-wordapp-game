import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { GameComponent } from './game/game.component';
import { GamesettingsComponent } from './gamesettings/gamesettings.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    GameComponent,
    GamesettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
