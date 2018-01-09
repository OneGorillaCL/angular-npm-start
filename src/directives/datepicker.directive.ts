declare const jQuery: any;
import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(){
    jQuery(this.el.nativeElement).datepicker({
        language: 'es',
        position: 'top left',
        view: 'years'
      });
  }

}
