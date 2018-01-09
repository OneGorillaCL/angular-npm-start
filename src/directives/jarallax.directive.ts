declare const jarallax: any;
import {Directive, OnInit, ElementRef, AfterViewChecked} from '@angular/core';

@Directive({
  selector: '[appJarallax]'
})
export class JarallaxDirective implements AfterViewChecked {

  constructor(public el: ElementRef) {
  }

  ngAfterViewChecked() {
    const _self = this;
    jarallax(_self.el.nativeElement, {
      speed: 0.7,
      noAndroid: true,
      noIos: true
    });
  }

}
