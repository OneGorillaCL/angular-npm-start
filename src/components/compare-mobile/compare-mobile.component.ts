import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-compare-mobile',
  templateUrl: './compare-mobile.component.html',
  styleUrls: ['./compare-mobile.component.css']
})
export class CompareMobileComponent implements OnInit {
  @Input('content') content = false;

  constructor() { }

  ngOnInit() {
  }

}
