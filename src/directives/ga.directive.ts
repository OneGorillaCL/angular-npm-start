declare const dataLayer : any;
import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appGa]'
})
export class GaDirective {
  @Input('appGa') appGa: string = 'GAevent';
  @Input('appGaCategory') appGaCategory: string = '';
  @Input('appGaAction') appGaAction: string = '';
  @Input('appGaLabel') appGaLabel: string = '';

  @HostListener('click', ['$event']) onClick($event){
    console.info('clicked: ', this.appGa);
    dataLayer.push({
      'event' : this.appGa,
      'eventCategory' : this.appGaCategory,
      'eventAction' : this.appGaAction,
      'eventLabel' : this.appGaLabel
    });
  }

  constructor() { }

}
