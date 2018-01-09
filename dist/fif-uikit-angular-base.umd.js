(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('contentful'), require('util'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router', 'contentful', 'util', '@angular/platform-browser'], factory) :
	(factory((global['fif-uikit-angular-base'] = {}),global.core,global.common,global.router,global.contentful,global.util,global.platformBrowser));
}(this, (function (exports,core,common,router,contentful,util,platformBrowser) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderComponent = (function () {
    function HeaderComponent(router$$1, renderer, activatedRoute) {
        var _this = this;
        this.router = router$$1;
        this.renderer = renderer;
        this.activatedRoute = activatedRoute;
        this.overrideRouter = false;
        this.tarjetasContent = false;
        this.currentUri = '';
        this.sidebarOpen = false;
        this.currentSubmenu = '';
        this.currentTab = '';
        this.currentCollapsed = '';
        this.showAditionalContentTarjetas = false;
        this.openSidebar = function () {
            _this.renderer.addClass(document.querySelector('body'), 'modal-open');
            _this.sidebarOpen = true;
            _this.currentCollapsed = '';
        };
        this.closeSidebar = function () {
            _this.renderer.removeClass(document.querySelector('body'), 'modal-open');
            _this.sidebarOpen = false;
            _this.currentCollapsed = '';
        };
        this.setCurrentCollapsed = function (collapsed) {
            if (_this.currentCollapsed === collapsed) {
                _this.currentCollapsed = '';
            }
            else {
                _this.currentCollapsed = collapsed;
            }
        };
        this.clearCurrentSubmenu = function () {
            _this.currentSubmenu = '';
        };
        this.setSubMenu = function (menu) {
            _this.currentSubmenu = menu;
        };
        this.updateAditionalContentTarjetas = function (state) {
            _this.showAditionalContentTarjetas = state;
        };
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.overrideRouter !== false) {
            this.currentTab = this.overrideRouter;
        }
        else {
            this.currentTab = this.activatedRoute.snapshot.params['tab'] || '';
        }
        this.currentUri = this.router.url;
        console.log('this.router', this.router);
        this.router.events.subscribe(function (nav) {
            if (nav && nav['url']) {
                _this.closeSidebar();
                _this.currentUri = nav['url'];
                console.log('this.currentUri', _this.currentUri);
                _this.currentTab = _this.activatedRoute.snapshot.params['tab'] || '';
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes['overrideRouter'] && changes['overrideRouter']['currentValue']) {
            this.currentTab = changes['overrideRouter']['currentValue'];
        }
    };
    HeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-header',
                    template: "<!-- SIDEBAR --> <div class=\"sidebar-modal\" [ngClass]=\"{'is-open':sidebarOpen===true}\"> <div class=\"sidebar-overlay\" (click)=\"closeSidebar()\"></div> <aside class=\"main-sidebar\"> <div class=\"sidebar-content\"> <button class=\"btn btn-link btn-close\" type=\"button\" data-sidebar=\"close\" (click)=\"closeSidebar()\"> <span class=\"icon icon-fixed\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </span> </button> <div class=\"list-group list-group-flush\" id=\"menu-collapse\" data-children=\".menu-item\"> <div class=\"menu-item\"> <a [routerLink]=\"['/home' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Inicio\" appGaLabel=\"Inicio\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\"> Inicio </a> </div> <div class=\"menu-item\"> <button class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center trigger-collapse\" [ngClass]=\"{'active' : currentCollapsed === 'menu-tarjetas'}\" data-toggle=\"collapse\" data-parent=\"#menu-collapse\" (click)=\"setCurrentCollapsed('menu-tarjetas')\" href=\"#menu-tarjetas\" aria-expanded=\"true\" aria-controls=\"menu-tarjetas\" type=\"button\"> Tarjetas <span class=\"icon icon-md icon-collapse\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </span> </button> <div id=\"menu-tarjetas\" class=\"collapse\" role=\"tabpanel\"> <ul class=\"nav nav-light flex-column pl-3\"> <li class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/tarjeta-falabella-soriana-mastercard' ]\">Tarjeta de Crédito Falabella Soriana MasterCard</a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/tarjeta-falabella-soriana' ]\">Tarjeta de Crédito Falabella Soriana</a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/tarjetas' ]\"><strong>Comparador de Tarjetas</strong></a> </li> </ul> </div> </div> <div class=\"menu-item\"> <a [routerLink]=\"['/beneficios' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Beneficios\" appGaLabel=\"Beneficios\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\"> Promociones </a> </div> <div class=\"menu-item\"> <a [routerLink]=\"['/recompensas' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Recompensas Soriana\" appGaLabel=\"Recompensas Soriana\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\"> Programa Recompensas </a> </div> <div class=\"menu-item\"> <a [routerLink]=\"['/nosotros' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Nosotros\" appGaLabel=\"Nosotros\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\"> Nosotros </a> </div> <div class=\"menu-item\"> <a [routerLink]=\"['/ayuda-y-contacto' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Ayuda y Contacto\" appGaLabel=\"Ayuda y Contacto\" class=\"list-group-item list-group-item-action d-flex justify-content-between align-items-center\"> Ayuda y Contacto </a> </div> </div> </div> </aside> </div> <!-- FIXED TOP --> <div id=\"fixed-top-container\"> <div class=\"container\"> <nav class=\"navbar  navbar-light\"> <div class=\"flex-1\"> <a class=\"navbar-brand\" [routerLink]=\"['/home' ]\" appGa=\"GAevent\" appGaCategory=\"Menu header\" appGaAction=\"Logo Falabella\" appGaLabel=\"Falabella Soriana\"> <img src=\"assets/logo.svg\" height=\"30\" alt=\"logo\"> </a> </div> <div> <div id=\"navbarSupportedContent\"> <!-- MAIN NAV --> <ul (mouseleave)=\"clearCurrentSubmenu()\" class=\"nav nav-light nav-linemarker nav-segmented nav-submenu text-uppercase\" id=\"main-nav-top\"> <li (mouseleave)=\"clearCurrentSubmenu()\" class=\"nav-item nav-item-padding\"> <a class=\"nav-link\" [ngClass]=\"{'active' : currentUri === '' || currentUri === '/home'}\" [routerLink]=\"['/home' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Inicio\" appGaLabel=\"Inicio\">Inicio</a> </li> <li class=\"nav-item nav-item-padding\" appDropdown> <a class=\"nav-link\" href=\"#\" id=\"dropdownTarjetas\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" [ngClass]=\"{'active' : currentUri === '/tarjeta-falabella-soriana' ||  currentUri === '/tarjetas' || currentUri === '/tarjeta-falabella-soriana-mastercard'}\" [routerLink]=\"['/tarjeta-falabella-soriana-mastercard' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Tarjetas\" appGaLabel=\"Tarjetas\">Tarjetas</a> <div class=\"dropdown-menu\" aria-labelledby=\"dropdownTarjetas\"> <a class=\"dropdown-item\" [routerLink]=\"['/tarjeta-falabella-soriana-mastercard' ]\">Tarjeta de Crédito Falabella Soriana MasterCard</a> <a class=\"dropdown-item\" [routerLink]=\"['/tarjeta-falabella-soriana' ]\">Tarjeta de Crédito Falabella Soriana</a> <a class=\"dropdown-item\" [routerLink]=\"['/tarjetas' ]\"><strong>Comparador de Tarjetas</strong></a> </div> </li> <li (mouseleave)=\"clearCurrentSubmenu()\" class=\"nav-item nav-item-padding\"> <a class=\"nav-link\" [ngClass]=\"{'active' : currentUri === '/beneficios' || currentUri.includes('/beneficios/') === true || currentUri.includes('/beneficio-detalle/') === true}\" [routerLink]=\"['/beneficios' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Beneficios\" appGaLabel=\"Beneficios\">Promociones</a> </li> <li (mouseleave)=\"clearCurrentSubmenu()\" class=\"nav-item nav-item-padding\"> <a class=\"nav-link\" [ngClass]=\"{'active' : currentUri === '/recompensas'}\" [routerLink]=\"['/recompensas' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Recompensas Soriana\" appGaLabel=\"Recompensas Soriana\">Programa Recompensas</a> </li> <li (mouseleave)=\"clearCurrentSubmenu()\" class=\"nav-item nav-item-padding\"> <a class=\"nav-link\" [ngClass]=\"{'active' : currentUri === '/nosotros'}\" [routerLink]=\"['/nosotros' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Nosotros\" appGaLabel=\"Nosotros\">Nosotros</a> </li> <li (mouseleave)=\"clearCurrentSubmenu()\" class=\"nav-item nav-item-padding\"> <a class=\"nav-link\" [ngClass]=\"{'active' : currentUri === '/ayuda-y-contacto' || currentUri === '/sucursales' }\" [routerLink]=\"['/ayuda-y-contacto' ]\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Ayuda y Contacto\" appGaLabel=\"Ayuda y Contacto\">Ayuda y Contacto</a> </li> </ul> </div> </div> <div class=\"d-flex flex-1 justify-content-end\"></div> </nav> <nav *ngIf=\"( currentUri === '/beneficios' || currentUri.includes('/beneficios/') !== false || currentUri.includes('/beneficio-detalle/') !== false )\" class=\"nav nav-sm nav-justified nav-light nav-linemarker text-uppercase\" id=\"tab-benefits\" role=\"tablist\"> <a [appScrollto]=\"'#menu-benefits'\" [factor]=\"2\" [routerLink]=\"['/beneficios/', 'destacados' ]\" class=\"nav-item nav-link\" [ngClass]=\"{'active':(currentTab===''||currentTab==='destacados')}\"> <span class=\"icon icon-lg text-secondary mb-3\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <g fill-rule=\"nonzero\" fill=\"#4D833F\"> <path d=\"M9.775 12.53H4.696c-.935 0-1.696.76-1.696 1.695v5.08C3 20.24 3.76 21 4.696 21h5.079c.935 0 1.696-.76 1.696-1.696v-5.08c0-.934-.761-1.695-1.696-1.695zm.565 6.774a.566.566 0 0 1-.565.566H4.696a.566.566 0 0 1-.565-.566v-5.08c0-.31.253-.564.565-.564h5.079c.312 0 .565.253.565.565v5.08zM19.304 12.53h-5.079c-.935 0-1.696.76-1.696 1.695v5.08c0 .935.761 1.695 1.696 1.695h5.08c.934 0 1.695-.76 1.695-1.696v-5.08c0-.934-.76-1.695-1.696-1.695zm.637 6.833c0 .319-.26.578-.578.578h-5.196a.579.579 0 0 1-.579-.578v-5.197c0-.318.26-.578.579-.578h5.196c.318 0 .578.26.578.578v5.197zM9.775 3H4.696C3.761 3 3 3.76 3 4.696v5.079c0 .935.76 1.696 1.696 1.696h5.079c.935 0 1.696-.761 1.696-1.696v-5.08C11.47 3.762 10.71 3 9.775 3zm.565 6.775a.566.566 0 0 1-.565.565H4.696a.566.566 0 0 1-.565-.565v-5.08c0-.31.253-.564.565-.564h5.079c.312 0 .565.253.565.565v5.079zM19.304 3h-5.079c-.935 0-1.696.76-1.696 1.696v5.079c0 .935.761 1.696 1.696 1.696h5.08c.934 0 1.695-.761 1.695-1.696v-5.08C21 3.762 20.24 3 19.304 3zm.588 6.797a.566.566 0 0 1-.566.565h-5.083a.566.566 0 0 1-.566-.565V4.714c0-.312.254-.566.566-.566h5.083c.312 0 .566.254.566.566v5.083z\"/> </g> </svg> </span> <div>Destacados</div> </a> <a [appScrollto]=\"'#menu-benefits'\" [factor]=\"2\" [routerLink]=\"['/beneficios/', 'soriana' ]\" class=\"nav-item nav-link\" [ngClass]=\"{'active':(currentTab==='soriana')}\"> <span class=\"icon icon-lg text-secondary mb-3\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <g fill=\"none\" fill-rule=\"evenodd\"> <g fill=\"#4D833F\"> <path d=\"M23.99 5.385c0-.746-.662-1.35-1.482-1.35H1.488c-.82 0-1.483.604-1.483 1.35v13.23c0 .746.662 1.35 1.482 1.35h21.07c.82 0 1.482-.604 1.433-1.4V5.385z\" fill-rule=\"nonzero\"/> <path d=\"M.442 7.263h23.121v2.905H.442z\"/> </g> <path d=\"M22.928 18.229c0 .459-.254.757-.507.757H1.57c-.307 0-.507-.379-.507-.757-.01-5.226-.01-8.539 0-9.94.011-1.514-.065-2.502 0-2.757.017-.065.028-.326.168-.39.093-.044.283-.085.57-.123h20.292c.326.044.545.113.658.207.113.095.197.315.252.66l-.074 12.343z\" fill=\"#FFF\"/> <path fill=\"#4D833F\" d=\"M.442 6.905h23.121v1.52H.442zm3.846 4.737h17.191a.361.361 0 1 1 0 .723H4.288a.361.361 0 1 1 0-.723zm6.18 1.967h4.88a.358.358 0 0 1 0 .715h-4.88a.358.358 0 0 1 0-.715z\"/> </g> </svg> </span> <div>Soriana</div> </a> <a [appScrollto]=\"'#menu-benefits'\" [factor]=\"2\" [routerLink]=\"['/beneficios/', 'cityclub' ]\" class=\"nav-item nav-link\" [ngClass]=\"{'active':(currentTab==='cityclub')}\"> <span class=\"icon icon-lg text-secondary mb-3\"> <svg viewBox=\"0 0 24 16\" xmlns=\"http://www.w3.org/2000/svg\"> <g fill=\"none\" fill-rule=\"evenodd\"> <path d=\"M23.99 1.385c0-.746-.662-1.35-1.482-1.35H1.488C.667.036.004.64.004 1.386v13.23c0 .746.662 1.35 1.482 1.35h21.07c.82 0 1.482-.604 1.433-1.4V1.385z\" fill-rule=\"nonzero\" fill=\"#4D833F\"/> <path d=\"M22.928 14.229c0 .459-.254.757-.507.757H1.57c-.307 0-.507-.379-.507-.757-.01-5.226-.01-8.539 0-9.94.011-1.514-.065-2.502 0-2.757.017-.065.028-.326.168-.39.093-.044.283-.085.57-.123h20.292c.326.044.545.113.658.207.113.095.197.315.252.66l-.074 12.343z\" fill=\"#FFF\"/> <ellipse fill=\"#FA9B00\" opacity=\".887\" cx=\"19.877\" cy=\"10.994\" rx=\"1.963\" ry=\"1.788\"/> <ellipse fill=\"#E80000\" opacity=\".759\" cx=\"17.914\" cy=\"10.994\" rx=\"1.963\" ry=\"1.788\"/> <rect fill=\"#D1C162\" x=\"2.209\" y=\"5.006\" width=\"3.485\" height=\"2.101\" rx=\"1.05\"/> <path fill=\"#4D833F\" d=\"M.442 2.905h23.121v1.52H.442zm3.846 4.737h17.191a.361.361 0 1 1 0 .723H4.288a.361.361 0 1 1 0-.723zm6.18 1.967h4.88a.358.358 0 0 1 0 .715h-4.88a.358.358 0 0 1 0-.715z\"/> </g> </svg> </span> <div>City Club</div> </a> <a [appScrollto]=\"'#menu-benefits'\" [factor]=\"2\" [routerLink]=\"['/beneficios/', 'cupones-descuento' ]\" class=\"nav-item nav-link\" [ngClass]=\"{'active':(currentTab==='cupones-descuento')}\"> <span class=\"icon icon-lg text-secondary mb-3\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <defs> <path d=\"M0 10.546l7.562-7.292c1.3-1.277 2.303-2.189 3.006-2.737.626-.487 1.915-.613 3.869-.379L18.295 0a186.05 186.05 0 0 0 0 3.254c.024 1.717.256 3.168-.134 3.906-.26.492-1.67 1.992-4.228 4.499l-5.97 6.162L0 10.546z\" id=\"a\"/> <path d=\"M22.107-.427c-.326 0-.544.21-.544.526 0 1.472-1.198 2.629-2.723 2.629h-3.268c-.327 0-.544.21-.544.526 0 .315.217.525.544.525h.381c-.163.316-.544.526-.925.526-.6 0-1.09-.473-1.09-1.051 0-.579.49-1.052 1.09-1.052.326 0 .544-.21.544-.526 0-.315-.218-.526-.544-.526-1.199 0-2.179.947-2.179 2.104 0 1.156.98 2.103 2.179 2.103a2.21 2.21 0 0 0 2.124-1.578h1.143V6.2a2.46 2.46 0 0 1-.762 1.787l-9.585 9.78-7.951-7.15L10.072.887A2.722 2.722 0 0 1 12.032.1h6.263v2.629h.545l.544.075v-3.23c0-.316-.218-.526-.544-.526h-6.808c-1.034 0-1.96.368-2.668 1.104L-1.147 10.247a.47.47 0 0 0-.163.369.47.47 0 0 0 .163.368l8.714 7.887a.503.503 0 0 0 .38.158.503.503 0 0 0 .382-.158l9.966-10.149a3.653 3.653 0 0 0 1.035-2.524V3.727c1.906-.263 3.322-1.788 3.322-3.628 0-.316-.218-.526-.545-.526z\" id=\"c\"/> </defs> <g transform=\"translate(1.362 3.95)\" fill=\"none\" fill-rule=\"evenodd\"> <mask id=\"b\" fill=\"#fff\"> <use xlink:href=\"#a\"/> </mask> <use fill=\"#FFF\" xlink:href=\"#a\"/> <path d=\"M6.859 5.883c-.926 0-1.634.683-1.634 1.577 0 .894.708 1.578 1.634 1.578.925 0 1.633-.684 1.633-1.578S7.784 5.883 6.86 5.883zm.055 2.362c-.514 0-.857-.328-.857-.82 0-.49.343-.818.857-.818.515 0 .858.328.858.819 0 .491-.343.819-.858.819zm1.578 3.422c-.925 0-1.633.684-1.633 1.578s.708 1.577 1.633 1.577c.926 0 1.634-.683 1.634-1.577 0-.894-.708-1.578-1.634-1.578zm.013 2.355c-.514 0-.857-.328-.857-.819 0-.491.343-.819.857-.819.515 0 .858.328.858.819 0 .491-.343.819-.858.819zm2.002-6.404a.54.54 0 0 0-.762 0l-4.901 4.733a.496.496 0 0 0 0 .736.6.6 0 0 0 .38.158.6.6 0 0 0 .382-.158l4.901-4.733a.496.496 0 0 0 0-.736z\" fill=\"#4D833F\" fill-rule=\"nonzero\" mask=\"url(#b)\"/> <use fill=\"#4D833F\" fill-rule=\"nonzero\" xlink:href=\"#c\"/> </g> </svg> </span> <div>Comercios</div> </a> </nav> <div *ngIf=\"(currentUri === '/tarjetas') && tarjetasContent !== false\" class=\"row\"> <div class=\"col-md-4\"></div> <div class=\"col-md-8\"> <div class=\"row mt-3 pr-4 pl-4\"> <div *ngFor=\"let tarjeta of tarjetasContent\" class=\"col-md-6 text-center\"> <img *ngIf=\"tarjeta['fields']['image'] && tarjeta['fields']['image']['fields']\" class=\"img-fluid mb-3\" width=\"30%\" src=\"{{tarjeta['fields']['image']['fields']['file']['url']}}\" alt=\"{{tarjeta['fields']['image']['fields']['title']}}\"> <p>{{tarjeta['fields']['nombreTarjeta']}} <!-- <a *ngIf=\"tarjeta['fields']['actionUrl']\" href=\"{{tarjeta['fields']['actionUrl']}}\" class=\"btn btn-sm btn-primary\"> {{tarjeta['fields']['actionTitle']}}</a> --> </p> </div> </div> </div> </div> </div> </div> <!-- TOP BAR --> <nav class=\"top-bar navbar navbar-dark bg-dark d-none d-lg-block\" id=\"top-bar\"> <ul class=\"navbar-nav flex-row\"> <li class=\"nav-item\"> <a class=\"nav-link\" appGa=\"GAevent\" appGaCategory=\"Menu header\" appGaAction=\"Header Soriana\" appGaLabel=\"Soriana\" href=\"https://www.soriana.com/\" target=\"_blank\">Soriana</a> </li> </ul> </nav> <!-- MAIN HEADER --> <div class=\"main-header-placeholder\"> <header class=\"main-header\" id=\"main-header\" appHeadroom> <div class=\"main-navbar\"> <div class=\"container\"> <div class=\"row align-items-center\"> <div class=\"col\"> <button class=\"btn btn-link btn-menu d-lg-none\" type=\"button\" data-sidebar=\"open\" (click)=\"openSidebar()\"> <span class=\"icon icon-fixed\"> <svg viewBox=\"0 0 43 29\" xmlns=\"http://www.w3.org/2000/svg\"> <g fill=\"none\" fill-rule=\"evenodd\"> <path d=\"M-3-9h48v48H-3z\"/> <path d=\"M2.5 29h38a2.5 2.5 0 1 0 0-5h-38a2.5 2.5 0 1 0 0 5zm0-12h38a2.5 2.5 0 1 0 0-5h-38a2.5 2.5 0 1 0 0 5zM0 2.5A2.5 2.5 0 0 0 2.5 5h38a2.5 2.5 0 1 0 0-5h-38A2.5 2.5 0 0 0 0 2.5z\" fill=\"#3F3F3F\" fill-rule=\"nonzero\"/> </g> </svg> </span> </button> </div> <div class=\"col-auto text-center\"> <a [routerLink]=\"['/home' ]\" appGa=\"GAevent\" appGaCategory=\"Menu header\" appGaAction=\"Logo Falabella\" appGaLabel=\"Falabella Soriana\"><img class=\"main-logo\" src=\"assets/logo.svg\" alt=\"Logo CMR\"></a> </div> <div class=\"col d-flex justify-content-end\"> <!--<button type=\"button\" class=\"btn btn-lg btn-default d-none d-lg-block\">Mi Cuenta</button>--> </div> </div> <!-- MAIN NAV CONTAINER --> <div class=\"main-nav-container d-none d-lg-flex mt-3 justify-content-center\"> <div> <!-- SUBMENU --> <div (mouseenter)=\"setSubMenu('submenu-tarjetas')\" (mouseleave)=\"clearCurrentSubmenu()\" class=\"submenu\" id=\"submenu-tarjetas\" [ngClass]=\"{'show' : currentSubmenu === 'submenu-tarjetas'}\"> <div class=\"d-flex\"> <div class=\"flex-1\"> <ul class=\"nav nav-light flex-column\"> <li class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/tarjeta-falabella-soriana-mastercard' ]\"> Tarjeta de Crédito Falabella Soriana MasterCard </a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/tarjeta-falabella-soriana' ]\"> Tarjeta de Crédito Falabella Soriana </a> </li> <li class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/tarjetas' ]\"> <strong>Comparador de tarjetas</strong> </a> </li> </ul> </div> </div> </div> <!-- MAIN NAV --> <ul (mouseleave)=\"clearCurrentSubmenu()\" class=\"nav nav-light nav-linemarker nav-segmented nav-submenu text-uppercase justify-content-center\" id=\"main-nav\"> <li (mouseenter)=\"clearCurrentSubmenu()\" class=\"nav-item nav-item-padding\"> <a class=\"nav-link\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Inicio\" appGaLabel=\"Inicio\" [ngClass]=\"{'active' : currentUri === '' || currentUri === '/home'}\" [routerLink]=\"['/home' ]\">Inicio</a> </li> <li (mouseenter)=\"setSubMenu('submenu-tarjetas')\" class=\"nav-item nav-item-padding has-submenu\" [ngClass]=\"{'show' : currentSubmenu === 'submenu-tarjetas'}\"> <a class=\"nav-link\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Tarjetas\" appGaLabel=\"Tarjetas\" [ngClass]=\"{'active' : currentUri === '/tarjeta-falabella-soriana' ||  currentUri === '/tarjetas' || currentUri === '/tarjeta-falabella-soriana-mastercard'}\" [routerLink]=\"['/tarjeta-falabella-soriana-mastercard' ]\">Tarjetas</a> </li> <li (mouseenter)=\"clearCurrentSubmenu()\" class=\"nav-item nav-item-padding\"> <a class=\"nav-link\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Beneficios\" appGaLabel=\"Beneficios\" [ngClass]=\"{'active' : currentUri === '/beneficios' || currentUri.includes('/beneficios/') === true || currentUri.includes('/beneficio-detalle/') === true}\" [routerLink]=\"['/beneficios' ]\">Promociones</a> </li> <li (mouseenter)=\"clearCurrentSubmenu()\" class=\"nav-item nav-item-padding\"> <a class=\"nav-link\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Recompensas Soriana\" appGaLabel=\"Recompensas Soriana\" [ngClass]=\"{'active' : currentUri === '/recompensas'}\" [routerLink]=\"['/recompensas' ]\">Programa Recompensas</a> </li> <li (mouseenter)=\"clearCurrentSubmenu()\" class=\"nav-item nav-item-padding\"> <a class=\"nav-link\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Nosotros\" appGaLabel=\"Nosotros\" [ngClass]=\"{'active' : currentUri === '/nosotros'}\" [routerLink]=\"['/nosotros' ]\">Nosotros</a> </li> <li (mouseenter)=\"clearCurrentSubmenu()\" class=\"nav-item nav-item-padding\"> <a class=\"nav-link\" appGa=\"GAevent\" appGaCategory=\"Menu superior\" appGaAction=\"Ayuda y Contacto\" appGaLabel=\"Ayuda y Contacto\" [ngClass]=\"{'active' : currentUri === '/ayuda-y-contacto' || currentUri === '/sucursales' }\" [routerLink]=\"['/ayuda-y-contacto' ]\">Ayuda y Contacto</a> </li> </ul> </div> </div> </div> </div> </header> </div> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: router.Router, },
        { type: core.Renderer2, },
        { type: router.ActivatedRoute, },
    ]; };
    HeaderComponent.propDecorators = {
        "overrideRouter": [{ type: core.Input, args: ['overrideRouter',] },],
        "tarjetasContent": [{ type: core.Input, args: ['tarjetasContent',] },],
    };
    return HeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderPageComponent = (function () {
    function HeaderPageComponent() {
        var _this = this;
        this.content = false;
        this.bannerImage = false;
        this.getImageUri = function () {
            if (_this.checkIsMobile() === true) {
                _this.bannerImage = _this.content['fields']['imageMobile']['fields']['file']['url']
                    || _this.content['fields']['image']['fields']['file']['url'] || '';
                console.log('show mobile', _this.bannerImage);
            }
            else {
                _this.bannerImage = _this.content['fields']['image']['fields']['file']['url'] || '';
                console.log('show image', _this.bannerImage);
            }
        };
        this.checkIsMobile = function () {
            return (window.innerWidth <= 991);
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    HeaderPageComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.getImageUri();
    };
    /**
     * @return {?}
     */
    HeaderPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HeaderPageComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.getImageUri();
    };
    HeaderPageComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-header-page',
                    template: "<!-- FEATURED --> <header *ngIf=\"(content !== false && bannerImage !== false)\" appJarallax class=\"section banner-lg d-flex align-items-center bg-image bg-parallax has-circle mb-4\" [ngStyle]=\"{'background-image': 'url(' + bannerImage + ')'}\"> <div class=\"container text-center\"> <div class=\"circle-container\"> <span class=\"circle\"></span> <h1 *ngIf=\"content['fields']['title']\" class=\"\">{{content['fields']['title']}}</h1> <div class=\"container-cover text-center m-auto\"> <p *ngIf=\"content['fields']['subtitle']\" class=\"lead\">{{content['fields']['subtitle']}}</p> </div> </div> </div> </header> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    HeaderPageComponent.ctorParameters = function () { return []; };
    HeaderPageComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
        "onResize": [{ type: core.HostListener, args: ['window:resize', ['$event'],] },],
    };
    return HeaderPageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    contentful: {
        space: 'awjurk6f9seg',
        accessToken: '480aa34b241409f0e57c96859c5c878c691b247aae5360e6df8a43fd1bf221d1'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContenfulService = (function () {
    function ContenfulService() {
        var _this = this;
        this.client = contentful.createClient({
            space: environment.contentful.space,
            accessToken: environment.contentful.accessToken
        });
        this.getEntries = function (query) {
            return _this.client.getEntries(query);
        };
        this.getEntry = function (id) {
            return _this.client.getEntry(id);
        };
    }
    ContenfulService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    ContenfulService.ctorParameters = function () { return []; };
    return ContenfulService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooterComponent = (function () {
    function FooterComponent(_contentService) {
        this._contentService = _contentService;
        this.documentLink = '';
        this._statusDocumentLink = false;
    }
    /**
     * @return {?}
     */
    FooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //beneficio
        this._contentService.getEntries({ content_type: 'documentLink' })
            .then(function (entry) {
            _this._statusDocumentLink = true;
            if (entry && entry['items'] && entry['items'].length > 0) {
                _this.documentLink = [];
                var /** @type {?} */ items = entry['items'];
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var it = items_1[_i];
                    var /** @type {?} */ key = it['fields']['documentId'];
                    var /** @type {?} */ value = it['fields']['asset']['fields']['file']['url'];
                    _this.documentLink[key] = value;
                }
                console.log('this.documentLink', _this.documentLink);
            }
        });
    };
    FooterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-footer',
                    template: "<!-- FOOTER --> <footer class=\"main-footer bg-dark text-white pt-5 pb-5\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-lg-5 mb-5 mb-lg-0\" *ngIf=\"_statusDocumentLink !== false\"> <h4 class=\"text-uppercase font-weight-bold\">Términos legales</h4> <div class=\"row\"> <div class=\"col-lg-6\"> <nav class=\"nav nav-dark flex-column\"> <a class=\"nav-link px-0\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Contrato de adhesion\" appGaLabel=\"Contrato de adhesion\" href=\"{{documentLink['contrato_adhesion']}}\" target=\"_blank\">Contrato de adhesión</a> <a class=\"nav-link px-0\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Despachos de cobranza\" appGaLabel=\"Despachos de cobranza\" href=\"{{documentLink['despachos_cobranza']}}\" target=\"_blank\">Despachos de cobranza</a> <a class=\"nav-link px-0\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Anexo de comisiones aplicables\" appGaLabel=\"Anexo de comisiones aplicables\" href=\"{{documentLink['anexo_comisiones']}}\" target=\"_blank\">Anexo de comisiones aplicables</a> </nav> </div> <div class=\"col-lg-6\"> <nav class=\"nav nav-dark flex-column\"> <a class=\"nav-link px-0\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Aviso de privacidad\" appGaLabel=\"Aviso de privacidad\" href=\"{{documentLink['aviso_privacidad']}}\" target=\"_blank\">Aviso de privacidad</a> <a class=\"nav-link px-0\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Seguridad de la Información\" appGaLabel=\"Seguridad de la Información\" href=\"{{documentLink['seguridad_informacion']}}\" target=\"_blank\">Seguridad de la Información</a> <a class=\"nav-link px-0\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Políticas de Programa de Lealtad\" appGaLabel=\"Políticas de Programa de Lealtad\" href=\"{{documentLink['politicas_programa_lealtad']}}\" target=\"_blank\">Políticas de Programa de Lealtad</a> </nav> </div> </div> </div> <div class=\"col-lg-7\"> <h4 class=\"text-uppercase font-weight-bold\">Atención a clientes</h4> <div class=\"row\"> <div class=\"col-lg-6 mb-5 mb-lg-0\"> <nav class=\"nav nav-dark  flex-column\"> <a class=\"nav-link px-0\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Lada sin costo\" appGaLabel=\"Lada sin costo\" href=\"tel:018007674262\">Lada sin costo<br> <b>01 800 767 4262</b></a> <a class=\"nav-link px-0\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Ciudad de México\" appGaLabel=\"Ciudad de México\" href=\"tel:+5550894262\">Ciudad de México<br> <b>(55) 5089 4262</b></a> </nav> </div> <div class=\"col-lg-6 text-lg-right\"> <a class=\"btn btn-sm bg-white btn-icon-text text-dark text-wrap text-left d-inline-flex align-items-center\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Emergencias Bancarias\" appGaLabel=\"Emergencias Bancarias\" href=\"tel:018007674262\"> <icon class=\"icon icon-md mr-2\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> <path d=\"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"/> </svg> </icon> <span class=\"flex-1\"> ROBO o EXTRAVÍO </span> </a> <ul class=\"list-inline mt-4\"> <li class=\"list-inline-item\"> <a href=\"https://www.instagram.com/falabellamx/\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Instagram\" appGaLabel=\"Instagram\" class=\"text-white\" title=\"Instagram\" target=\"_blank\"> <span class=\"icon icon-lg\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M22.934 7.465a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.947-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511c-.734.276-1.4.71-1.949 1.27a5.392 5.392 0 0 0-1.269 1.947 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12c0 2.987.013 3.362.066 4.535.018.913.191 1.816.511 2.67.277.734.71 1.4 1.27 1.949.549.56 1.214.992 1.948 1.269.854.32 1.757.493 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218c.32-.854.493-1.757.51-2.67.054-1.173.067-1.548.067-4.535s-.013-3.362-.066-4.535zm-1.98 8.98a6.085 6.085 0 0 1-.379 2.042 3.642 3.642 0 0 1-2.088 2.088 6.085 6.085 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064-2.937 0-3.285-.011-4.445-.064a6.085 6.085 0 0 1-2.042-.379 3.407 3.407 0 0 1-1.265-.823 3.407 3.407 0 0 1-.823-1.265 6.085 6.085 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445 0-2.937.011-3.285.064-4.445a6.085 6.085 0 0 1 .379-2.042c.176-.478.457-.91.823-1.265a3.407 3.407 0 0 1 1.265-.823 6.085 6.085 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064 2.937 0 3.285.011 4.445.064a6.085 6.085 0 0 1 2.042.379c.478.176.91.457 1.265.823.366.355.647.787.823 1.265.243.654.37 1.345.379 2.042.053 1.16.064 1.508.064 4.445 0 2.937-.011 3.285-.064 4.445zM12 6.351a5.649 5.649 0 1 0 0 11.3A5.649 5.649 0 0 0 12 6.35v.001zm0 9.316a3.667 3.667 0 1 1 0-7.334 3.667 3.667 0 0 1 0 7.334zm7.192-9.539a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0z\"/> </svg> </span> </a> </li> <li class=\"list-inline-item\"> <a href=\"https://www.facebook.com/FalabellaMx-1114085545364722/?ref=bookmarks\" appGa=\"GAevent\" appGaCategory=\"Footer Terminos Legales\" appGaAction=\"Facebook\" appGaLabel=\"Facebook\" class=\"text-white\" title=\"Facebook\" target=\"_blank\"> <span class=\"icon icon-lg\"> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M21.6,1.2H2.4c-0.7,0-1.2,0.5-1.2,1.2v19.2c0,0.7,0.5,1.2,1.2,1.2h10.3v-8.4H9.9v-3.3h2.8V8.8 c0-2.8,1.7-4.3,4.2-4.3c1.2,0,2.2,0.1,2.5,0.1v2.9l-1.7,0c-1.4,0-1.6,0.6-1.6,1.6v2.1h3.2l-0.4,3.3h-2.8v8.4h5.5 c0.7,0,1.2-0.5,1.2-1.2V2.4C22.8,1.7,22.3,1.2,21.6,1.2z\"/> </svg> </span> </a> </li> </ul> </div> </div> </div> </div> </div> </footer> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    FooterComponent.ctorParameters = function () { return [
        { type: ContenfulService, },
    ]; };
    return FooterComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SliderComponent = (function () {
    function SliderComponent() {
        this.title = '';
        this.content = false;
    }
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    SliderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-slider',
                    template: "<section *ngIf=\"(content !== false)\" class=\"section mb-4 mt-4 border border-light\"> <h2 *ngIf=\"(title !== '')\" class=\"text-center font-weight-light mb-4\">{{title}}</h2> <!-- SLIDER --> <div appSwiper class=\"item-slider\" id=\"slider-promociones\"> <div class=\"swiper-container\"> <div class=\"swiper-wrapper\"> <!-- SLIDE --> <div class=\"swiper-slide\" *ngFor=\"let item of content; let idx = index;\"> <a href=\"{{item['fields']['actionUrl']}}\" appGa=\"GAevent\" appGaCategory=\"Calugas Promociones Mundo Falabella\" appGaAction=\"Caluga {{idx}}\" appGaLabel=\"Clic Aqui\" class=\"card card-item text-dark mb-4\"> <img *ngIf=\"item['fields']['image'] && item['fields']['image']['fields']['file']\" class=\"card-img-top\" src=\"{{item['fields']['image']['fields']['file']['url']}}\" alt=\"{{item['fields']['image']['fields']['title']}}\"> <div class=\"card-body\"> <img *ngIf=\"item['fields']['logo'] && item['fields']['logo']['fields']['file']\" class=\"d-block mb-2\" height=\"40px\" src=\"{{item['fields']['logo']['fields']['file']['url']}}\" alt=\"{{item['fields']['logo']['fields']['title']}}\"> <h3 *ngIf=\"item['fields']['preText']\">{{item['fields']['preText']}}</h3> <p *ngIf=\"item['fields']['text']\" class=\"card-text font-weight-light\"> {{item['fields']['text']}} </p> </div> </a> </div> </div> <div class=\"swiper-pagination\"></div> </div> <div class=\"slider-next\"> <span class=\"icon icon-fixed\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </span> </div> <div class=\"slider-prev\"> <div class=\"icon icon-fixed\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </div> </div> </div> </section> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return []; };
    SliderComponent.propDecorators = {
        "title": [{ type: core.Input, args: ['title',] },],
        "content": [{ type: core.Input, args: ['content',] },],
    };
    return SliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BannerBgImageComponent = (function () {
    function BannerBgImageComponent() {
        this.content = false;
        this.getTextContent = function (obj) {
            return obj['infoText'] || obj['text'] || '';
        };
    }
    /**
     * @return {?}
     */
    BannerBgImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BannerBgImageComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-banner-bg-image',
                    template: "<!-- BANNER --> <div *ngIf=\"(content !== false) && (content['fields']['contentAlignment'] !== 'bottom')\" class=\"d-flex bg-image banner-md mb-4 border border-light\" [ngStyle]=\"{'background-image': 'url(' + content['fields']['image']['fields']['file']['url'] + ')'}\" > <div class=\"row no-gutters flex-1\" [ngClass]=\"{ 'justify-content-center' : (content['fields']['contentAlignment'] === 'center'), 'justify-content-end' : (content['fields']['contentAlignment'] === 'right'), 'justify-content-start' : (content['fields']['contentAlignment'] === 'left')}\"> <div class=\"col-sm-6 col-lg-4 bg-transparency d-flex align-items-center\"> <div class=\"card bg-transparent border-0 text-center flex-1\"> <div class=\"card-body content-body-sm\"> <h3 *ngIf=\"(content['fields']['title'] !== '')\" class=\"h4\">{{content['fields']['title']}}</h3> <hr *ngIf=\"(getTextContent(content['fields']) !== '')\" class=\"hr-sm hr-bold\"> <p *ngIf=\"(getTextContent(content['fields']) !== '')\" [innerHtml]=\"getTextContent(content['fields'])\"></p> <a *ngIf=\"(content['fields']['actionTitle'] !== '' && content['fields']['actionUrl'] !== '')\" class=\"btn btn-lg btn-secondary mt-3 text-wrap btn-min-width\" href=\"{{content['fields']['actionUrl']}}\">{{content['fields']['actionTitle']}}</a> </div> </div> </div> </div> </div> <!-- BANNER --> <div *ngIf=\"(content !== false) && (content['fields']['contentAlignment'] === 'bottom')\" [@fadeInEffect] class=\"bg-light text-center mb-4\"> <img src=\"{{content['fields']['image']['fields']['file']['url']}}\" class=\"img-fluid\" alt=\"{{content['fields']['image']['fields']['titler']}}\"> <div class=\"content-body content-body-sm\"> <h2 *ngIf=\"(content['fields']['title'] !== '')\" class=\"font-weight-light\">{{content['fields']['title']}}</h2> <p *ngIf=\"(content['fields']['infoText'] !== '')\" [innerHtml]=\"content['fields']['infoText']\"></p> <a *ngIf=\"(content['fields']['actionTitle'] !== '' && content['fields']['actionUrl'] !== '')\" class=\"btn btn-lg btn-secondary btn-min-width text-wrap mt-3\" href=\"{{content['fields']['actionUrl']}}\">{{content['fields']['actionTitle']}}</a> </div> </div> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    BannerBgImageComponent.ctorParameters = function () { return []; };
    BannerBgImageComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
    };
    return BannerBgImageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BannerDefaultComponent = (function () {
    function BannerDefaultComponent() {
        this.content = false;
        this.index = false;
        this.target = '_self';
        this.getTextContent = function (obj) {
            return obj['infoText'] || obj['text'] || obj['content'] || '';
        };
    }
    /**
     * @return {?}
     */
    BannerDefaultComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} change
     * @return {?}
     */
    BannerDefaultComponent.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        console.log('ngOnChanges', change);
    };
    BannerDefaultComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-banner-default',
                    template: "<!-- MESES SIN INTERESES --> <div *ngIf=\"(content && content['fields']['contentPosition']!=='content only')\" class=\"text-center border border-light mb-4\"> <div class=\"row align-items-center\"> <div class=\"col-md-6\" [ngClass]=\"{ 'order-md-2' : (index % 2 === 1) }\"> <img *ngIf=\"(content['fields']['image']['fields']['file'])\" src=\"{{content['fields']['image']['fields']['file']['url']}}\" class=\"img-fluid\" alt=\"{{content['fields']['image']['fields']['title']}}\"> </div> <div class=\"col-md-6\"> <div class=\"content-body\"> <h2 *ngIf=\"(content['fields']['title']!=='')\" class=\"font-weight-light\">{{content['fields']['title']}}</h2> <p *ngIf=\"(getTextContent(content['fields']) !== '')\" [innerHtml]=\"(getTextContent(content['fields']) | marked)\"></p> <a *ngIf=\"(content['fields']['actionTitle'])\" target=\"{{target}}\" appGa=\"GAevent\" appGaCategory=\"Promociones Mundo Falabella\" appGaAction=\"{{content['fields']['title']}}\" appGaLabel=\"{{content['fields']['title']}}\" class=\"btn btn-lg btn-secondary text-wrap mt-3 btn-min-width\" href=\"{{content['fields']['actionUrl']}}\">{{content['fields']['actionTitle']}}</a> </div> </div> </div> </div> <!-- OPORTUNIDADES --> <div *ngIf=\"(content && content['fields']['contentPosition']==='content only')\" [@fadeInEffect] class=\"bg-light mb-4\"> <div class=\"py-5 px-3 px-md-5\"> <h2 *ngIf=\"(content['fields']['title']!=='')\" class=\"text-center font-weight-light mb-5\">{{content['fields']['title']}}</h2> <div [innerHtml]=\"(content['fields']['content'] | marked)\"></div> </div> </div> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    BannerDefaultComponent.ctorParameters = function () { return []; };
    BannerDefaultComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
        "index": [{ type: core.Input, args: ['index',] },],
        "target": [{ type: core.Input, args: ['target',] },],
    };
    return BannerDefaultComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CardComponent = (function () {
    function CardComponent() {
        this.content = false;
    }
    /**
     * @return {?}
     */
    CardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[app-card]',
                    template: " <div *ngIf=\"content!==false\" class=\"card-group h-100\"> <a [routerLink]=\"['/beneficio-detalle/', content['sys']['id'] ]\" class=\"card card-item text-dark mb-4\"> <img *ngIf=\"(content['fields']['bannerImage']&&content['fields']['bannerImage']['fields'])\" class=\"card-img-top\" src=\"{{content['fields']['bannerImage']['fields']['file']['url']}}\" alt=\"{{content['fields']['bannerImage']['fields']['title']}}\"> <div class=\"card-body\"> <img *ngIf=\"(content['fields']['logoImage']&&content['fields']['logoImage']['fields'])\" src=\"{{content['fields']['logoImage']['fields']['file']['url']}}\" class=\"d-block mb-2\" height=\"40px\" alt=\"{{content['fields']['logoImage']['fields']['title']}}\"> <h3>{{content['fields']['preTextDestacado']}}</h3> <p class=\"card-text\">         {{content['fields']['textDestacado']}} </p> </div> </a> </div> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CardComponent.ctorParameters = function () { return []; };
    CardComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
    };
    return CardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeaderTarjetaComponent = (function () {
    function HeaderTarjetaComponent() {
        var _this = this;
        this.content = false;
        this.bannerImage = false;
        this.getImageUri = function () {
            if (_this.checkIsMobile() === true) {
                _this.bannerImage = _this.content['fields']['bannerImageMobile']['fields']['file']['url']
                    || _this.content['fields']['bannerImage']['fields']['file']['url'] || '';
                console.log('show mobile', _this.bannerImage);
            }
            else {
                _this.bannerImage = _this.content['fields']['bannerImage']['fields']['file']['url'] || '';
                console.log('show image', _this.bannerImage);
            }
        };
        this.checkIsMobile = function () {
            return (window.innerWidth <= 991);
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    HeaderTarjetaComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.getImageUri();
    };
    /**
     * @return {?}
     */
    HeaderTarjetaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HeaderTarjetaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.getImageUri();
    };
    HeaderTarjetaComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-header-tarjeta',
                    template: "<header *ngIf=\"(content !== false && bannerImage !== false)\" appJarallax class=\"section banner-lg d-flex align-items-center bg-image bg-parallax has-circle\" [ngStyle]=\"{'background-image': 'url(' + bannerImage + ')'}\"> <div class=\"container text-center\"> <div class=\"circle-container\"> <span class=\"circle\"></span> <h1 *ngIf=\"content['fields']['title']\">{{content['fields']['title']}}</h1> <div class=\"container-cover text-center m-auto\"> <p *ngIf=\"content['fields']['subTitle']\" class=\"lead\">{{content['fields']['subTitle']}}</p> </div> <img *ngIf=\"content['fields']['cardImage']\" class=\"img-fluid\" src=\"{{content['fields']['cardImage']['fields']['file']['url']}}\" alt=\"{{content['fields']['cardImage']['fields']['title']}}\" /> <a *ngIf=\"content['fields']['actionTitle']\" href=\"{{content['fields']['actionUrl']}}\" class=\"btn btn-lg btn-primary text-wrap\">{{content['fields']['actionTitle']}}</a> </div> </div> </header> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    HeaderTarjetaComponent.ctorParameters = function () { return []; };
    HeaderTarjetaComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
        "onResize": [{ type: core.HostListener, args: ['window:resize', ['$event'],] },],
    };
    return HeaderTarjetaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContentBoxComponent = (function () {
    function ContentBoxComponent() {
        this.content = false;
    }
    /**
     * @return {?}
     */
    ContentBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ContentBoxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-content-box',
                    template: "<div *ngIf=\"(content !== false)\" class=\"bg-light text-center mb-3\"> <img *ngIf=\"content['fields']['image']&&content['fields']['image']['fields']\" src=\"{{content['fields']['image']['fields']['file']['url']}}\" class=\"img-fluid\" alt=\"{{content['fields']['image']['fields']['title']}}\"> <div class=\"p-5\"> <h2 *ngIf=\"(content['fields']['title'])\" class=\"h1 font-weight-light mb-5\">{{(content['fields']['title'])}}</h2> <p class=\"lead mb-5\">{{(content['fields']['text'])}}</p> </div> </div> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ContentBoxComponent.ctorParameters = function () { return []; };
    ContentBoxComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
    };
    return ContentBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContentTabTarjetaComponent = (function () {
    function ContentTabTarjetaComponent() {
        this.content = false;
    }
    /**
     * @return {?}
     */
    ContentTabTarjetaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ContentTabTarjetaComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-content-tab-tarjeta',
                    template: "<div *ngIf=\"(content !== false)\" class=\"row pb-5 border-bottom\"> <div *ngIf=\"(content['fields']['title'])\" class=\"col-12\"> <h4 class=\"font-weight-light mt-5 mb-5\">{{content['fields']['title']}}</h4> </div> <div class=\"col-12 col-md-5\"> <img *ngIf=\"(content['fields']['image']&&content['fields']['image']['fields'])\" class=\"img-fluid mb-3\" src=\"{{content['fields']['image']['fields']['file']['url']}}\" alt=\"{{content['fields']['image']['fields']['title']}}\"> </div> <div *ngIf=\"(content['fields']['text'])\" class=\"col-12 col-md-7 list-md-padding text-dark\" [innerHtml]=\"(content['fields']['text'] | marked)\"> </div> </div> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ContentTabTarjetaComponent.ctorParameters = function () { return []; };
    ContentTabTarjetaComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
    };
    return ContentTabTarjetaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CompareComponent = (function () {
    function CompareComponent() {
        var _this = this;
        this.content = false;
        this.compareData = [];
        this.getCompareCase = function (index) {
            var /** @type {?} */ output = '';
            if (index && index > 0 && _this.compareData[index] && _this.compareData[index]['data']) {
                var /** @type {?} */ item = _this.compareData[index];
                var /** @type {?} */ hasCheck = false;
                var /** @type {?} */ equals = false;
                var /** @type {?} */ last = false;
                for (var /** @type {?} */ dataIndex in item['data']) {
                    var /** @type {?} */ dataItem = item['data'][dataIndex];
                    if (dataItem['check']) {
                        hasCheck = true;
                    }
                    if (last !== false) {
                        equals = (dataItem['detalleValue'] === last['detalleValue']);
                    }
                    last = dataItem;
                }
                if (hasCheck) {
                    output = '_default_';
                }
                else if (equals === true) {
                    output = '_equals_';
                }
                else {
                    output = '_default_';
                }
            }
            return output;
        };
    }
    /**
     * @return {?}
     */
    CompareComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CompareComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['content']['currentValue'] && changes['content']['currentValue'].length > 0) {
            var /** @type {?} */ currentValue = changes['content']['currentValue'];
            for (var /** @type {?} */ index in currentValue) {
                var /** @type {?} */ tarjeta = currentValue[index];
                if (tarjeta && tarjeta['fields']['detallesTarjeta']) {
                    var /** @type {?} */ detallesTarjeta = tarjeta['fields']['detallesTarjeta'];
                    for (var _i = 0, detallesTarjeta_1 = detallesTarjeta; _i < detallesTarjeta_1.length; _i++) {
                        var det = detallesTarjeta_1[_i];
                        if (det['detalleId'] && util.isUndefined(this.compareData[det['detalleId']])) {
                            var /** @type {?} */ compareItem = {
                                "detalleLabel": det['detalleLabel'],
                                "detalleValue": det['detalleValue'],
                                "data": []
                            };
                            this.compareData[det['detalleId']] = compareItem;
                        }
                        this.compareData[det['detalleId']]["data"].push(det);
                    }
                    console.log('this.compareData', this.compareData);
                }
            }
        }
    };
    CompareComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-compare',
                    template: "<div *ngIf=\"content!==false\" class=\"row\"> <div class=\"col-md-4\"></div> <div class=\"col-md-8\"> <div class=\"row text-center mt-3 p-4\"> <div *ngFor=\"let tarjeta of content\" class=\"col-md-6 pr-4 pl-4\"> <img *ngIf=\"tarjeta['fields']['image'] && tarjeta['fields']['image']['fields']\" class=\"img-fluid mb-3\" src=\"{{tarjeta['fields']['image']['fields']['file']['url']}}\" alt=\"{{tarjeta['fields']['image']['fields']['title']}}\"> <p>{{tarjeta['fields']['nombreTarjeta']}}</p> <!-- <a *ngIf=\"tarjeta['fields']['actionUrl']\" href=\"{{tarjeta['fields']['actionUrl']}}\" class=\"btn btn-lg btn-primary\"> {{tarjeta['fields']['actionTitle']}}</a> --> </div> </div> </div> </div> <div *ngIf=\"content!==false\" class=\"bg-striped-childs mt-3 mt-md-3  mb-3 mb-md-3 text-center\"> <ng-container *ngFor=\"let item of compareData; let idx = index\" [ngSwitch]=\"getCompareCase(idx)\"> <div *ngSwitchCase=\"'_equals_'\" class=\"row segmented-childs align-items-center p-4\"> <div class=\"col-md-4 text-left font-weight-bold\">{{item['detalleLabel']}}</div> <div class=\"col-md-8\">{{item['detalleValue']}}</div> </div> <div *ngSwitchCase=\"'_default_'\" class=\"row segmented-childs align-items-center p-4\"> <div class=\"col-md-4 text-left font-weight-bold\">{{item['detalleLabel']}}</div> <div class=\"col-md-4\" *ngFor=\"let data of item['data']\"> <ng-container *ngIf=\"data['check']\"> <img src=\"assets/ic-check.svg\" alt=\"check\"> </ng-container> <ng-container *ngIf=\"data['check']===undefined\">{{data['detalleValue']}}</ng-container> <!-- <ng-container *ngIf=\"data['check']===undefined && data['detalleValue']===''\"> <img src=\"assets/ic-equis.svg\" alt=\"equis\"> </ng-container> --> </div> </div> </ng-container> <div class=\"row segmented-childs align-items-center p-4\"> <div class=\"col-md-4 text-left font-weight-bold\"></div> <div *ngFor=\"let tarjeta of content\" class=\"col-md-4\"> <a *ngIf=\"tarjeta['fields']['actionUrl2']\" href=\"{{tarjeta['fields']['actionUrl2']}}\" class=\"btn btn-lg btn-secondary\"> {{tarjeta['fields']['actionTitle2']}} </a> </div> <!-- <div class=\"col-md-4\"><a [routerLink]=\"['/tarjeta-falabella-soriana' ]\" class=\"btn btn-lg btn-secondary\">VER MÁS</a></div> <div class=\"col-md-4\"><a [routerLink]=\"['/tarjeta-falabella-soriana-mastercard' ]\" class=\"btn btn-lg btn-secondary\">VER MÁS</a></div>--> </div> </div> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CompareComponent.ctorParameters = function () { return []; };
    CompareComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
    };
    return CompareComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CardContactComponent = (function () {
    function CardContactComponent() {
        this.content = false;
    }
    /**
     * @return {?}
     */
    CardContactComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CardContactComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[app-card-contact]',
                    template: " <div class=\"card-group h-100\" *ngIf=\"content !== false\"> <a href=\"{{content['fields']['actionUrl']}}\" class=\"card card-item text-dark text-center mb-4\"> <img src=\"{{content['fields']['image']['fields']['file']['url']}}\" class=\"card-img-top\" alt=\"{{content['fields']['image']['fields']['title']}}\" > <div class=\"card-body\"> <h4>{{content['fields']['title']}}</h4> <a *ngIf=\"content['fields']['actionUrl']\" class=\"btn btn-lg btn-secondary text-uppercase text-wrap btn-min-width\" href=\"{{content['fields']['actionUrl']}}\">{{content['fields']['actionTitle']}}</a> </div> </a> </div> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CardContactComponent.ctorParameters = function () { return []; };
    CardContactComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
    };
    return CardContactComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FaqComponent = (function () {
    function FaqComponent() {
        this.content = false;
        this.faqs = false;
    }
    /**
     * @return {?}
     */
    FaqComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FaqComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        console.log('changes', changes);
    };
    FaqComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-faq',
                    template: "<section *ngIf=\"content !== false || faqs !== false\"> <img *ngIf=\"content!==false&&content['fields']['image']&&content['fields']['image']['fields']\" src=\"{{content['fields']['image']['fields']['file']['url']}}\" class=\"img-fluid\" alt=\"{{content['fields']['image']['fields']['title']}}\"> <h2 *ngIf=\"(content!==false&&content['fields']['title'])\" class=\"text-center font-weight-light mt-5 mb-5\">{{content['fields']['title']}}</h2> <div *ngIf=\"faqs !== false\" class=\"font-weight-light mt-3\" id=\"accordion\" role=\"tablist\"> <div class=\"border-bottom\" *ngFor=\"let item of faqs; let idx = index;\"> <div class=\"row p-3  align-items-center\"> <div class=\"col-12 col-md-12 \" id=\"heading{{idx}}\" role=\"tab\"> <a class=\"h4\" data-toggle=\"collapse\" href=\"#collapse{{idx}}\" aria-expanded=\"false\" aria-controls=\"collapse{{idx}}\"> <span class=\"icon icon-md icon-collapse\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\"></path> <path d=\"M0 0h24v24H0z\" fill=\"none\"></path> </svg> </span> {{item['fields']['title']}} </a> </div> </div> <div id=\"collapse{{idx}}\" class=\"collapse p-3\" [ngClass]=\"{'show' : idx === -1}\" role=\"tabpanel\" [innerHtml]=\"item['fields']['questions'] | marked\" aria-labelledby=\"heading{{idx}}\" data-parent=\"#accordion\"> <!--<ng-container *ngFor=\"let pregunta of item['preguntas']\"> <h5>{{pregunta['pregunta']}}</h5> <ul *ngIf=\"pregunta['respuestas']\"> <li *ngFor=\"let respuesta of pregunta['respuestas']\" [innerHtml]=\"respuesta | marked\"></li> </ul> </ng-container>--> </div> </div> </div> </section> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    FaqComponent.ctorParameters = function () { return []; };
    FaqComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
        "faqs": [{ type: core.Input, args: ['faqs',] },],
    };
    return FaqComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    /**
     * @return {?}
     */
    LoaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    LoaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-loader',
                    template: "<div class=\"section d-flex align-items-center\"> <div class=\"text-center m-auto\"> <div class=\"bg-loader\"> <div class=\"loader\"></div> </div> </div> </div> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    LoaderComponent.ctorParameters = function () { return []; };
    return LoaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CompareMobileComponent = (function () {
    function CompareMobileComponent() {
        this.content = false;
    }
    /**
     * @return {?}
     */
    CompareMobileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CompareMobileComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'app-compare-mobile',
                    template: "<section *ngIf=\"content!==false\" class=\"mb-3 mt-3 border border-light\"> <!-- SLIDER --> <div class=\"item-slider\" id=\"slider-tarjetas\" appSwiper [checkMobile]=\"false\" [element]=\"'#slider-tarjetas .swiper-container'\" [nextEl]=\"'#slider-tarjetas .slider-next'\" [prevEl]=\"'#slider-tarjetas .slider-prev'\" [paginationEl]=\"'#slider-tarjetas .swiper-pagination'\" [qSlidePerView]=\"1\" [checkResize]=\"false\"> <div class=\"swiper-container\"> <div class=\"swiper-wrapper\"> <!-- SLIDE --> <div class=\"swiper-slide\" *ngFor=\"let tarjeta of content; let idx = index\"> <div class=\"bg-striped-childs w-100\"> <div class=\"row text-center p-4\"> <div class=\"col-12\"> <img *ngIf=\"tarjeta['fields']['image'] && tarjeta['fields']['image']['fields']\" class=\"img-fluid mb-3\" src=\"{{tarjeta['fields']['image']['fields']['file']['url']}}\" alt=\"{{tarjeta['fields']['image']['fields']['title']}}\"> <p>{{tarjeta['fields']['nombreTarjeta']}}</p> </div> </div> <div class=\"row segmented-childs align-items-center p-4\" *ngFor=\"let item of tarjeta['fields']['detallesTarjeta']\"> <div class=\"col-md-12 font-weight-bold\">{{item['detalleLabel']}}</div> <div *ngIf=\"item['check'] === true\" class=\"col-md-12 text-center\"><img src=\"assets/ic-check.svg\" alt=\"check\"></div> <div *ngIf=\"item['check'] === undefined\" class=\"col-md-12\">{{item['detalleValue']}}</div> </div> <div class=\"row segmented-childs text-center p-4\"> <div class=\"col-md-12\"><a href=\"#\" class=\"btn btn-lg btn-secondary\">VER MÁS</a></div> </div> </div> </div> </div> <div class=\"swiper-pagination\"></div> </div> <div class=\"slider-next slider-tarjetas\"> <span class=\"icon icon-fixed\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </span> </div> <div class=\"slider-prev slider-tarjetas\"> <div class=\"icon icon-fixed\"> <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </div> </div> </div> </section> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CompareMobileComponent.ctorParameters = function () { return []; };
    CompareMobileComponent.propDecorators = {
        "content": [{ type: core.Input, args: ['content',] },],
    };
    return CompareMobileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var GaDirective = (function () {
    function GaDirective() {
        this.appGa = 'GAevent';
        this.appGaCategory = '';
        this.appGaAction = '';
        this.appGaLabel = '';
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    GaDirective.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        console.info('clicked: ', this.appGa);
        dataLayer.push({
            'event': this.appGa,
            'eventCategory': this.appGaCategory,
            'eventAction': this.appGaAction,
            'eventLabel': this.appGaLabel
        });
    };
    GaDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[appGa]'
                },] },
    ];
    /** @nocollapse */
    GaDirective.ctorParameters = function () { return []; };
    GaDirective.propDecorators = {
        "appGa": [{ type: core.Input, args: ['appGa',] },],
        "appGaCategory": [{ type: core.Input, args: ['appGaCategory',] },],
        "appGaAction": [{ type: core.Input, args: ['appGaAction',] },],
        "appGaLabel": [{ type: core.Input, args: ['appGaLabel',] },],
        "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    };
    return GaDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DatepickerDirective = (function () {
    function DatepickerDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    DatepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        jQuery(this.el.nativeElement).datepicker({
            language: 'es',
            position: 'top left',
            view: 'years'
        });
    };
    DatepickerDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[appDatepicker]'
                },] },
    ];
    /** @nocollapse */
    DatepickerDirective.ctorParameters = function () { return [
        { type: core.ElementRef, },
    ]; };
    return DatepickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ScrolltoDirective = (function () {
    function ScrolltoDirective() {
        this.appScrollto = false;
        this.notMobile = false;
        this.factor = 0;
        this.getIsMobile = function () {
            return (window.innerWidth < 992);
        };
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    ScrolltoDirective.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var /** @type {?} */ _self = this;
        if ((this.appScrollto !== false && (this.notMobile === true && this.getIsMobile() === true)) ||
            (this.appScrollto !== false && this.notMobile === false && this.getIsMobile() === false)) {
            jQuery('html, body').animate({
                scrollTop: (jQuery(_self.appScrollto).offset().top + this.factor) + 'px'
            });
            return this;
        }
    };
    ScrolltoDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[appScrollto]'
                },] },
    ];
    /** @nocollapse */
    ScrolltoDirective.ctorParameters = function () { return []; };
    ScrolltoDirective.propDecorators = {
        "appScrollto": [{ type: core.Input, args: ['appScrollto',] },],
        "notMobile": [{ type: core.Input, args: ['notMobile',] },],
        "factor": [{ type: core.Input, args: ['factor',] },],
        "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    };
    return ScrolltoDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var JarallaxDirective = (function () {
    function JarallaxDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    JarallaxDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ _self = this;
        jarallax(_self.el.nativeElement, {
            speed: 0.7,
            noAndroid: true,
            noIos: true
        });
    };
    JarallaxDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[appJarallax]'
                },] },
    ];
    /** @nocollapse */
    JarallaxDirective.ctorParameters = function () { return [
        { type: core.ElementRef, },
    ]; };
    return JarallaxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SwiperDirective = (function () {
    function SwiperDirective() {
        this.qSlidePerView = 3;
        this.nextEl = '#slider-promociones .slider-next';
        this.prevEl = '#slider-promociones .slider-prev';
        this.element = '#slider-promociones .swiper-container';
        this.paginationEl = '#slider-promociones .swiper-pagination';
        this.checkMobile = true;
        this.checkResize = true;
        this.checkValue = function (value) {
            return ((util.isUndefined(value) === false) && value !== '' && value !== null);
        };
        this.checkIsMobile = function () {
            return (window.innerWidth <= 768);
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SwiperDirective.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((typeof this.slider !== 'undefined' || this.slider !== null) && this.checkResize === true) {
            if (this.checkIsMobile() === true) {
                this.qSlidePerView = 1;
            }
            else {
                this.qSlidePerView = 3;
            }
            this.slider.params.slidesPerView = this.qSlidePerView;
            this.slider.params.slidesPerGroup = this.qSlidePerView;
            this.slider.update();
        }
    };
    /**
     * @return {?}
     */
    SwiperDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        console.log('width', window.innerWidth);
        if (this.checkIsMobile() === true && this.checkMobile === true) {
            console.log('MOBILE', window.innerWidth);
            this.qSlidePerView = 1;
        }
        console.log('this.qSlidePerView', this.qSlidePerView);
        this.slider = new Swiper(this.element, {
            slidesPerView: this.qSlidePerView,
            slidesPerGroup: this.qSlidePerView,
            spaceBetween: 30,
            updateOnImagesReady: true,
            navigation: {
                nextEl: this.nextEl,
                prevEl: this.prevEl
            },
            pagination: {
                el: this.paginationEl,
                clickable: true,
            },
        });
        this.slider.update();
    };
    SwiperDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[appSwiper]'
                },] },
    ];
    /** @nocollapse */
    SwiperDirective.ctorParameters = function () { return []; };
    SwiperDirective.propDecorators = {
        "qSlidePerView": [{ type: core.Input, args: ['qSlidePerView',] },],
        "nextEl": [{ type: core.Input, args: ['nextEl',] },],
        "prevEl": [{ type: core.Input, args: ['prevEl',] },],
        "element": [{ type: core.Input, args: ['element',] },],
        "paginationEl": [{ type: core.Input, args: ['paginationEl',] },],
        "checkMobile": [{ type: core.Input, args: ['checkMobile',] },],
        "checkResize": [{ type: core.Input, args: ['checkResize',] },],
        "onResize": [{ type: core.HostListener, args: ['window:resize', ['$event'],] },],
    };
    return SwiperDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HeadroomDirective = (function () {
    function HeadroomDirective(el, document) {
        this.el = el;
        this.document = document;
        this.updateAditionalContentTarjetas = new core.EventEmitter();
        /*@HostListener('window:resize', ['$event'])
          onResize(event) {
            if( typeof this.headerHeadroom !== 'undefined' || this.headerHeadroom !== null ){
              this.headerHeadroom.offset = this.el.nativeElement.offsetHeight + this.topBar.offsetHeight;
              //this.mainHeaderWrap.style.height= this.mainHeader.offsetHeight + "px";
            }
          }*/
        this.checkIsMobile = function () {
            return (window.innerWidth <= 768);
        };
    }
    /**
     * @return {?}
     */
    HeadroomDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        //helper plugin
        var /** @type {?} */ mainHeader = this.el.nativeElement, /** @type {?} */
        topBar = this.document.querySelector("#top-bar"), /** @type {?} */
        fixedTopContainer = this.document.querySelector("#fixed-top-container");
        var /** @type {?} */ headroom = new Headroom(fixedTopContainer, {
            offset: mainHeader['offsetHeight'] + topBar['offsetHeight']
        });
        var /** @type {?} */ headroom2 = new Headroom(mainHeader);
        headroom.init();
        headroom2.init();
    };
    HeadroomDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[appHeadroom]'
                },] },
    ];
    /** @nocollapse */
    HeadroomDirective.ctorParameters = function () { return [
        { type: core.ElementRef, },
        { type: undefined, decorators: [{ type: core.Inject, args: [platformBrowser.DOCUMENT,] },] },
    ]; };
    HeadroomDirective.propDecorators = {
        "updateAditionalContentTarjetas": [{ type: core.Output },],
    };
    return HeadroomDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownDirective = (function () {
    function DropdownDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    DropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        jQuery(this.el.nativeElement).hover(function () {
            jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
        }, function () {
            jQuery(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
        });
    };
    DropdownDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[appDropdown]'
                },] },
    ];
    /** @nocollapse */
    DropdownDirective.ctorParameters = function () { return [
        { type: core.ElementRef, },
    ]; };
    return DropdownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MarkedPipe = (function () {
    function MarkedPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    MarkedPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (util.isUndefined(value) === true || value === '')
            return '';
        return marked(value);
    };
    MarkedPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'marked'
                },] },
    ];
    /** @nocollapse */
    MarkedPipe.ctorParameters = function () { return []; };
    return MarkedPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FifUiKitAngularBase = (function () {
    function FifUiKitAngularBase() {
    }
    /**
     * @return {?}
     */
    FifUiKitAngularBase.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FifUiKitAngularBase,
            providers: [ContenfulService]
        };
    };
    FifUiKitAngularBase.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        HeaderComponent,
                        HeaderPageComponent,
                        FooterComponent,
                        SliderComponent,
                        BannerBgImageComponent,
                        BannerDefaultComponent,
                        JarallaxDirective,
                        SwiperDirective,
                        HeadroomDirective,
                        CardComponent,
                        HeaderTarjetaComponent,
                        ContentBoxComponent,
                        ContentTabTarjetaComponent,
                        MarkedPipe,
                        CompareComponent,
                        DropdownDirective,
                        CardContactComponent,
                        FaqComponent,
                        LoaderComponent,
                        DatepickerDirective,
                        ScrolltoDirective,
                        CompareMobileComponent,
                        GaDirective
                    ],
                    exports: [
                        HeaderComponent,
                        HeaderPageComponent,
                        FooterComponent,
                        SliderComponent,
                        BannerBgImageComponent,
                        BannerDefaultComponent,
                        JarallaxDirective,
                        SwiperDirective,
                        HeadroomDirective,
                        CardComponent,
                        HeaderTarjetaComponent,
                        ContentBoxComponent,
                        ContentTabTarjetaComponent,
                        MarkedPipe,
                        CompareComponent,
                        DropdownDirective,
                        CardContactComponent,
                        FaqComponent,
                        LoaderComponent,
                        DatepickerDirective,
                        ScrolltoDirective,
                        CompareMobileComponent,
                        GaDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    FifUiKitAngularBase.ctorParameters = function () { return []; };
    return FifUiKitAngularBase;
}());

exports.FifUiKitAngularBase = FifUiKitAngularBase;
exports.HeaderComponent = HeaderComponent;
exports.HeaderPageComponent = HeaderPageComponent;
exports.FooterComponent = FooterComponent;
exports.SliderComponent = SliderComponent;
exports.BannerBgImageComponent = BannerBgImageComponent;
exports.BannerDefaultComponent = BannerDefaultComponent;
exports.CardComponent = CardComponent;
exports.HeaderTarjetaComponent = HeaderTarjetaComponent;
exports.ContentBoxComponent = ContentBoxComponent;
exports.ContentTabTarjetaComponent = ContentTabTarjetaComponent;
exports.CompareComponent = CompareComponent;
exports.CardContactComponent = CardContactComponent;
exports.FaqComponent = FaqComponent;
exports.LoaderComponent = LoaderComponent;
exports.CompareMobileComponent = CompareMobileComponent;
exports.GaDirective = GaDirective;
exports.DatepickerDirective = DatepickerDirective;
exports.ScrolltoDirective = ScrolltoDirective;
exports.JarallaxDirective = JarallaxDirective;
exports.SwiperDirective = SwiperDirective;
exports.HeadroomDirective = HeadroomDirective;
exports.DropdownDirective = DropdownDirective;
exports.MarkedPipe = MarkedPipe;
exports.ContenfulService = ContenfulService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
