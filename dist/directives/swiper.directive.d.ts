import { AfterViewInit } from '@angular/core';
export declare class SwiperDirective implements AfterViewInit {
    qSlidePerView: number;
    nextEl: string;
    prevEl: string;
    element: string;
    paginationEl: string;
    checkMobile: boolean;
    checkResize: boolean;
    slider: any;
    onResize(event: any): void;
    checkValue: (value: any) => boolean;
    checkIsMobile: () => boolean;
    constructor();
    ngAfterViewInit(): void;
}
