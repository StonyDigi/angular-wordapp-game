import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  words: Array<Word> = new Array<Word>();

  //belerakja a szót a listába
  create(w: Word) {
    this.words.push(w);
    this.save();
  }

  delete(uid: string) {
    //törölje a szó gyűjteményből, azok a szavak maradhatnak ahol az uid nem egyenlő a paraméterül kapott uid-vel
    this.words = this.words.filter(t => t.uid != uid);
    this.save();
  }

  save() {
    localStorage.setItem('words', JSON.stringify(this.words));
  }

  load() {
    this.words = JSON.parse(localStorage.getItem('words') ?? '[]');
  }

  update(uid: string, goods: number, bads: number) {
    //megkeressük azt a szót ahol a paraméterül kapott uid megegyezik az uid-vel, mivel ez csak 1db elemre lehet igaz ezért kell kivenni a [0]-dik elemet a tömbből
    let w = this.words.filter(t => t.uid == uid)[0];
    //aztán megnöveljük vagy ezt vagy a bads-et attól függ eltaláltuk-e a szavat
    w.goods += goods;
    w.bads += bads;
    //és lementjük
    this.save();
  }

  playGame(limit: number) : Array<Word> {
    let gameWords = new Array<Word>();
    //ellenőrzés, ha a limit nagyobb mint a this.words.length az baj és akkor felülírjuk!
    //pld if működése: elvan tárolva 10db szó és mi azt mondjuk kikérdezéskor, hogy mi 20 db szavat szeretnénk kiválasztani, akkor a kiválasztott méret átíródik a tömb valódi méretére!! (védelem)
    if(limit > this.words.length) {
      limit = this.words.length;
    }
    //gameWords-be bele fogunk pakolni egy összetett függvénnnyel random indexen lévő szavakat a words Array-ból.
    //addig megyünk amíg limit-nyi szót bele nem raktunk!
    while(gameWords.length != limit) {
      //kiveszünk az összes szót reprezentáló listánkból annyit amennyit megadtunk 0 és a tömb hossza között és belerakjuk a w változóba
      let w = this.words[this.getRndInteger(0, this.words.length-1)];
      //megnézzük a random sorsolt szavakon, hogy ha szűrűnk, benne van-e a szó, ha nincs akkor belerakjuk!
      if(gameWords.filter(t => t.uid == w.uid).length == 0) {
        gameWords.push(w);
      }
    }
    //ha sikerült akkor visszatérünk a tömbbel
    return gameWords;
  }

  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  constructor() { 
    this.load();
   }
}