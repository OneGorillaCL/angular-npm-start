import {Component, OnInit, Input} from '@angular/core';
import {fadeInEffect} from "../../animations/animations";

@Component({
  selector: '[app-card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [fadeInEffect]
})
export class CardComponent implements OnInit {
  @Input('content') content= false;

  constructor() { }

  ngOnInit() {
  }

}
