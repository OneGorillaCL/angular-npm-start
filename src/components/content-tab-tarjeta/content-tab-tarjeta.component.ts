import {Component, Input, OnInit} from '@angular/core';
import {fadeInEffect} from "../../animations";

@Component({
  selector: 'app-content-tab-tarjeta',
  templateUrl: './content-tab-tarjeta.component.html',
  styleUrls: ['./content-tab-tarjeta.component.css'],
  animations: [fadeInEffect]
})
export class ContentTabTarjetaComponent implements OnInit {
  @Input('content') content: any = false;

  constructor() { }

  ngOnInit() {
  }

}
