import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css']
})
export class ContentBoxComponent implements OnInit {
  @Input('content') content = false;

  constructor() { }

  ngOnInit() {
  }

}
