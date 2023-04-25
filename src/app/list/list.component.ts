import { Component } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(public service: WordService) {}
}
