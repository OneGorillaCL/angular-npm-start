import {Component, OnInit, Input, SimpleChange} from '@angular/core';
import {fadeInEffect} from "../../animations/animations";

@Component({
  selector: 'app-banner-default',
  templateUrl: './banner-default.component.html',
  styleUrls: ['./banner-default.component.css'],
  animations: [fadeInEffect]
})
export class BannerDefaultComponent implements OnInit {
  @Input('content') content = false;
  @Input('index') index = false;
  @Input('target') target = '_self';

  getTextContent = (obj:any) => {
    return obj['infoText'] || obj['text'] || obj['content'] || '';
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change:SimpleChange){
    console.log('ngOnChanges',change);
  }

}
