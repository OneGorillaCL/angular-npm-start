import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-card-contact]',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.css']
})
export class CardContactComponent implements OnInit {
  @Input('content') content: any = false;

  constructor() { }

  ngOnInit() {
  }

}
