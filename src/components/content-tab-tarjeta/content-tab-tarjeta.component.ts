import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-tab-tarjeta',
  templateUrl: './content-tab-tarjeta.component.html',
  styleUrls: ['./content-tab-tarjeta.component.css']
})
export class ContentTabTarjetaComponent implements OnInit {
  @Input('content') content: any = false;

  constructor() { }

  ngOnInit() {
  }

}
