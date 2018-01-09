declare const jQuery: any;
import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appScrollto]'
})
export class ScrolltoDirective {
  @Input('appScrollto') appScrollto: any = false;
  @Input('notMobile') notMobile: any = false;
  @Input('factor') factor: number = 0;
  @HostListener('click', ['$event']) onClick($event){
    const _self = this;
    if(
      ( this.appScrollto !== false && ( this.notMobile === true && this.getIsMobile() === true ) ) ||
      ( this.appScrollto !== false && this.notMobile === false && this.getIsMobile() === false )
    ){
      jQuery('html, body').animate({
        scrollTop: ( jQuery(_self.appScrollto).offset().top + this.factor ) + 'px'
      });
      return this;
    }
  }

  getIsMobile = () => {
    return (window.innerWidth < 992);
  }

  constructor() { }

}
