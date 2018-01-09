import {Component, OnInit, Input} from '@angular/core';
import {fadeInEffect} from "../../animations";

@Component({
  selector: 'app-banner-bg-image',
  templateUrl: './banner-bg-image.component.html',
  styleUrls: ['./banner-bg-image.component.css'],
  animations: [fadeInEffect]
})
export class BannerBgImageComponent implements OnInit {
  @Input('content') content = false;

  getTextContent = (obj:any) => {
    return obj['infoText'] || obj['text'] || '';
  }

  constructor() { }

  ngOnInit() {
  }

}
