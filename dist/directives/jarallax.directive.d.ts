import { ElementRef, AfterViewChecked } from '@angular/core';
export declare class JarallaxDirective implements AfterViewChecked {
    el: ElementRef;
    constructor(el: ElementRef);
    ngAfterViewChecked(): void;
}
