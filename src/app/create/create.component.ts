import { Component } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  actual: Word = new Word();

  constructor(public service: WordService, private router: Router) {

  }

  createAndRedirect() {
    //meghívja a service-ben lévő create() függvényt és miután átadta az aktuális szót átirányít minket a lista oldalra!
    this.service.create(this.actual);
    this.router.navigate(['list']);
  }
}
