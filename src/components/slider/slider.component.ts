import {Component, OnInit, Input} from '@angular/core';
import {fadeInEffect} from "../../animations/animations";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [fadeInEffect]
})
export class SliderComponent implements OnInit {
  @Input('title') title='';
  @Input('content') content=false;

  constructor() { }

  ngOnInit() {
  }

}
