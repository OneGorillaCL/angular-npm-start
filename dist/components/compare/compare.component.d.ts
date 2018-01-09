import { OnInit, SimpleChange } from '@angular/core';
export declare class CompareComponent implements OnInit {
    content: boolean;
    compareData: any;
    getCompareCase: (index: any) => string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChange): void;
}
