import { ElementRef, OnInit, EventEmitter } from '@angular/core';
export declare class HeadroomDirective implements OnInit {
    el: ElementRef;
    private document;
    updateAditionalContentTarjetas: EventEmitter<any>;
    headerHeadroom: any;
    mainHeaderWrap: any;
    topBar: any;
    mainHeader: any;
    checkIsMobile: () => boolean;
    constructor(el: ElementRef, document: any);
    ngOnInit(): void;
}
