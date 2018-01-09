import {Component, OnInit, Input, HostListener, SimpleChange} from '@angular/core';
import {fadeInEffect} from "../../animations/animations";

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css'],
  animations: [fadeInEffect]
})
export class HeaderPageComponent implements OnInit {
  @Input('content') content=false;
  bannerImage : any = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getImageUri();
  }

  getImageUri = () => {
    if( this.checkIsMobile() === true ){
      this.bannerImage = this.content['fields']['imageMobile']['fields']['file']['url']
        || this.content['fields']['image']['fields']['file']['url'] || '';
      console.log('show mobile', this.bannerImage);
    }else{
      this.bannerImage = this.content['fields']['image']['fields']['file']['url'] || '';
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
