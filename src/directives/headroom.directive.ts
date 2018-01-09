import {DOCUMENT} from "@angular/platform-browser";
declare const Headroom:any;
import {Directive, HostListener, ElementRef, Inject, OnInit, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appHeadroom]'
})
export class HeadroomDirective implements OnInit{
  @Output() updateAditionalContentTarjetas : EventEmitter<any> = new EventEmitter();
  headerHeadroom: any;
  mainHeaderWrap: any;
  topBar: any;
  mainHeader: any;

  /*@HostListener('window:resize', ['$event'])
  onResize(event) {
    if( typeof this.headerHeadroom !== 'undefined' || this.headerHeadroom !== null ){
      this.headerHeadroom.offset = this.el.nativeElement.offsetHeight + this.topBar.offsetHeight;
      //this.mainHeaderWrap.style.height= this.mainHeader.offsetHeight + "px";
    }
  }*/

  checkIsMobile = () => {
    return ( window.innerWidth <= 768 );
  }

  constructor(public el: ElementRef, @Inject(DOCUMENT) private document) {
  }

  ngOnInit() {
    //helper plugin
    const _self = this;
    //init
    /*this.mainHeader = this.el.nativeElement;
    this.mainHeaderWrap = this.document.createElement("div");
    this.topBar = this.document.querySelector(".top-bar");
    //this.mainHeaderWrap.style.height= this.mainHeader.offsetHeight + "px";

    this.mainHeaderWrap.classList.add("main-header-placeholder");
    this.mainHeader.parentNode.insertBefore(this.mainHeaderWrap, this.mainHeader);
    this.mainHeaderWrap.appendChild(this.mainHeader);

    this.headerHeadroom = new Headroom(this.mainHeader, {
      offset: _self.mainHeader.offsetHeight + _self.topBar.offsetHeight,
      onTop : function() {
        _self.updateAditionalContentTarjetas.emit(false);
      },
      onNotTop : function() {
        _self.updateAditionalContentTarjetas.emit(true);
      },
    });

    this.headerHeadroom.init();*/
    // HEADROOM.JS - https://github.com/WickyNilliams/headroom.js/
    const mainHeader = this.el.nativeElement,
      topBar = this.document.querySelector("#top-bar"),
      fixedTopContainer = this.document.querySelector("#fixed-top-container");

    const headroom = new Headroom(fixedTopContainer, {
      offset: mainHeader['offsetHeight'] + topBar['offsetHeight']
    });

    const headroom2  = new Headroom(mainHeader);

    headroom.init();
    headroom2.init();
  }

}
