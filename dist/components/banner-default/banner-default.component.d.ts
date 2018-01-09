import { OnInit, SimpleChange } from '@angular/core';
export declare class BannerDefaultComponent implements OnInit {
    content: boolean;
    index: boolean;
    target: string;
    getTextContent: (obj: any) => any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(change: SimpleChange): void;
}
