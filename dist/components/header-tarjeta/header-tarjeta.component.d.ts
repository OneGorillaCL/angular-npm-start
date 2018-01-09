import { OnInit, SimpleChange } from '@angular/core';
export declare class HeaderTarjetaComponent implements OnInit {
    content: boolean;
    bannerImage: any;
    onResize(event: any): void;
    getImageUri: () => void;
    checkIsMobile: () => boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChange): void;
}
