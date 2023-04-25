import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Word } from '../word';
import { WordService } from '../word.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  gameWords: Array<Word> = new Array<Word>();
  actual: Word = new Word();
  userValue: string = '';
  result: string = '';
  constructor(private route: ActivatedRoute, public service: WordService, private router: Router) {
    route.params.subscribe(t => {
      this.gameWords = service.playGame(parseInt(t['limit']));
      //pop, kiveszi az első elemet , vissza adja és ki is törli, de ha üres a tömb akkor undefined-el tér vissza és ezért kell neki a <Word> típus
      this.actual = <Word>this.gameWords.pop();
    });
  }

  check() {
    //megvizsgálja, hogy az aktuális szónak az angol megfelelője megyegyezik-e amit a felhasználó begépelt, ha igen akkor szépen a service-nek szólunk, hogy updatelni kell az aktuális szó goods értékét megnöveljük++, bads értékét nem, ellenkező esetben ugyan ezt csináljuk csak a rosszakat növeljük!!
    if (this.actual.eng == this.userValue) {
      this.service.update(this.actual.uid, 1, 0);
      this.result = 'Good!';
    } else {
      this.service.update(this.actual.uid, 0, 1);
      this.result = 'Bad answer! Correct: ' + this.actual.eng;
    }
  }

  next() {
    this.userValue = '';
    this.result = '';
    if(this.gameWords.length > 0) {
      this.actual = <Word>this.gameWords.pop();
    } else {
      this.router.navigate(['list']);
    }
  }
}