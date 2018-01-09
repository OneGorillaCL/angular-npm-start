import {Component, Input, OnInit} from '@angular/core';
import {fadeInEffect} from "../../animations";

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.css'],
  animations: [fadeInEffect]
})
export class ContentBoxComponent implements OnInit {
  @Input('content') content = false;

  constructor() { }

  ngOnInit() {
  }

}
