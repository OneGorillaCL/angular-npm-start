declare const jQuery: any;
import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  constructor(private el: ElementRef) { }

  ngOnInit(){

    jQuery(this.el.nativeElement).hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
    });
  }

}
