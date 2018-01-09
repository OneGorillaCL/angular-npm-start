import {isUndefined} from "util";
declare const Swiper: any;
import {Directive, AfterViewInit, HostListener, AfterContentInit, Input} from '@angular/core';

@Directive({
  selector: '[appSwiper]'
})
export class SwiperDirective implements AfterViewInit {
  @Input('qSlidePerView') qSlidePerView: number = 3;
  @Input('nextEl') nextEl: string = '#slider-promociones .slider-next';
  @Input('prevEl') prevEl: string = '#slider-promociones .slider-prev';
  @Input('element') element: string = '#slider-promociones .swiper-container';
  @Input('paginationEl') paginationEl: string = '#slider-promociones .swiper-pagination';
  @Input('checkMobile') checkMobile: boolean = true;
  @Input('checkResize') checkResize: boolean = true;
  slider: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if( ( typeof this.slider !== 'undefined' || this.slider !== null ) && this.checkResize === true ){
      if( this.checkIsMobile() === true ) {
        this.qSlidePerView = 1;
      }else{
        this.qSlidePerView = 3;
      }
      this.slider.params.slidesPerView = this.qSlidePerView;
      this.slider.params.slidesPerGroup = this.qSlidePerView;
      this.slider.update();
    }
  }

  checkValue = (value:any) => {
    return ( ( isUndefined(value) === false )  && value !== ''  && value !== null );
  }

  checkIsMobile = () => {
    return ( window.innerWidth <= 768 );
  }

  constructor() { }

  ngAfterViewInit() {
    console.log('width',window.innerWidth);
    if( this.checkIsMobile() === true && this.checkMobile === true ) {
      console.log('MOBILE',window.innerWidth);
      this.qSlidePerView = 1;
    }
    console.log('this.qSlidePerView',this.qSlidePerView);
    this.slider = new Swiper(this.element, {
      slidesPerView: this.qSlidePerView,
      slidesPerGroup: this.qSlidePerView,
      spaceBetween: 30,
      updateOnImagesReady: true,
      navigation: {
        nextEl: this.nextEl,
        prevEl: this.prevEl
      },
      pagination: {
        el: this.paginationEl,
        clickable: true,
      },
    });
    this.slider.update();
  }


}
