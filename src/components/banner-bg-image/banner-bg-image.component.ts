import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-banner-bg-image',
  templateUrl: './banner-bg-image.component.html',
  styleUrls: ['./banner-bg-image.component.css']
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
