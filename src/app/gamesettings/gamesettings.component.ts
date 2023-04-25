import { Component } from '@angular/core';
import { WordService } from '../word.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gamesettings',
  templateUrl: './gamesettings.component.html',
  styleUrls: ['./gamesettings.component.css']
})
export class GamesettingsComponent {
  limit: number = 1;

  constructor(public service: WordService, private router: Router) {

  }

  play() {
    this.router.navigate(['game', this.limit]);
  }
}
