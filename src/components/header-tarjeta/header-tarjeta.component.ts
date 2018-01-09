import {Component, OnInit, Input, SimpleChange, HostListener} from '@angular/core';
import {fadeInEffect} from "../../animations";

@Component({
  selector: 'app-header-tarjeta',
  templateUrl: './header-tarjeta.component.html',
  styleUrls: ['./header-tarjeta.component.css'],
  animations: [fadeInEffect]
})
export class HeaderTarjetaComponent implements OnInit {
  @Input('content') content=false;
  bannerImage : any = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getImageUri();
  }

  getImageUri = () => {
    if( this.checkIsMobile() === true ){
      this.bannerImage = this.content['fields']['bannerImageMobile']['fields']['file']['url']
        || this.content['fields']['bannerImage']['fields']['file']['url'] || '';
      console.log('show mobile', this.bannerImage);
    }else{
      this.bannerImage = this.content['fields']['bannerImage']['fields']['file']['url'] || '';
      console.log('show image', this.bannerImage);
    }

  }

  checkIsMobile = () => {
    return ( window.innerWidth <= 991 );
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChange){
    this.getImageUri();
  }

}
