import { OnInit, Renderer2, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
export declare class HeaderComponent implements OnInit {
    private router;
    private renderer;
    private activatedRoute;
    overrideRouter: any;
    tarjetasContent: any;
    currentUri: string;
    sidebarOpen: boolean;
    currentSubmenu: string;
    currentTab: string;
    currentCollapsed: string;
    showAditionalContentTarjetas: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    setCurrentCollapsed: (collapsed: string) => void;
    clearCurrentSubmenu: () => void;
    setSubMenu: (menu: any) => void;
    updateAditionalContentTarjetas: (state: boolean) => void;
    constructor(router: Router, renderer: Renderer2, activatedRoute: ActivatedRoute);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChange): void;
}
