import {Component, Input, OnInit, SimpleChange} from '@angular/core';
import {fadeInEffect} from "../../animations/animations";
import {isUndefined} from "util";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
  animations: [fadeInEffect]
})
export class CompareComponent implements OnInit {
  @Input('content') content = false;
  compareData : any = [];

  getCompareCase = (index) => {
    let output = '';
    if( index && index > 0 && this.compareData[index] && this.compareData[index]['data'] ){
      const item = this.compareData[index];
      let hasCheck = false;
      let equals = false;
      let last : any = false;
      for(let dataIndex in item['data']){
        const dataItem = item['data'][dataIndex];
        if(dataItem['check']){
          hasCheck = true;
        }
        if( last !== false ){
          equals = ( dataItem['detalleValue'] === last['detalleValue'] );
        }
        last = dataItem;
      }
      if(hasCheck){
        output = '_default_';
      }else if(equals === true){
        output = '_equals_';
      }else{
        output = '_default_';
      }
    }
    return output;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChange){
    if( changes['content']['currentValue'] && changes['content']['currentValue'].length > 0 ){
      const currentValue = changes['content']['currentValue'];
      for(let index in currentValue){
        const tarjeta = currentValue[index];
        if( tarjeta && tarjeta['fields']['detallesTarjeta'] ){
          const detallesTarjeta = tarjeta['fields']['detallesTarjeta'];
          for(let det of detallesTarjeta){
            if( det['detalleId'] && isUndefined(this.compareData[det['detalleId']])  ){
              const compareItem = {
                "detalleLabel" : det['detalleLabel'],
                "detalleValue" : det['detalleValue'],
                "data" : []
              }
              this.compareData[det['detalleId']] = compareItem;
            }
            this.compareData[det['detalleId']]["data"].push(det);
          }
          console.log('this.compareData',this.compareData);
        }
      }
    }
  }

}
