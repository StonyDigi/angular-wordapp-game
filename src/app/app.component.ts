import { Component } from '@angular/core';
import { WordService } from './word.service';
import { Word } from './word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(service: WordService) {
    //create kipróbálása
    /*let w = new Word();
    w.hun = 'macska';
    w.eng = 'cat';
    service.create(w);
    console.log(service.words);
    service.update(w.uid, 1, 0);
    console.log(service.words);
    service.save();*/

    //delete kipróbálása
    /*console.log('törlés');
    service.delete(w.uid);
    console.log(service.words);*/

    //service.save();
    //console.log(service.words);

    /*let w = new Word();
    w.hun = 'macska';
    w.eng = 'cat';
    service.create(w);

    w = new Word();
    w.hun = 'kutya';
    w.eng = 'dog';
    service.create(w);

    w = new Word();
    w.hun = 'egér';
    w.eng = 'mouse';
    service.create(w);

    w = new Word();
    w.hun = 'ló';
    w.eng = 'horse';
    service.create(w);*/

    /*console.log(service.words);

    let x = service.playGame(2);
    console.log(x);*/
  }
}
