import { OnInit } from '@angular/core';
import { ContenfulService } from "../../services/contenful.service";
export declare class FooterComponent implements OnInit {
    private _contentService;
    documentLink: any;
    _statusDocumentLink: boolean;
    constructor(_contentService: ContenfulService);
    ngOnInit(): void;
}
