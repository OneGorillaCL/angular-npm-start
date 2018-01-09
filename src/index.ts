import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { BannerBgImageComponent } from './components/banner-bg-image/banner-bg-image.component';
import { BannerDefaultComponent } from './components/banner-default/banner-default.component';
import { CardComponent } from './components/card/card.component';
import { HeaderTarjetaComponent } from './components/header-tarjeta/header-tarjeta.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';
import { ContentTabTarjetaComponent } from './components/content-tab-tarjeta/content-tab-tarjeta.component';
import { CompareComponent } from './components/compare/compare.component';
import { CardContactComponent } from './components/card-contact/card-contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CompareMobileComponent } from './components/compare-mobile/compare-mobile.component';

import { GaDirective } from './directives/ga.directive';
import { DatepickerDirective } from './directives/datepicker.directive';
import { ScrolltoDirective } from './directives/scrollto.directive';
import { JarallaxDirective } from './directives/jarallax.directive';
import { SwiperDirective } from './directives/swiper.directive';
import { HeadroomDirective } from './directives/headroom.directive';
import { DropdownDirective } from './directives/dropdown.directive';

import { MarkedPipe } from './pipes/marked.pipe';

import {ContenfulService} from "./services/contenful.service";

export * from './components/header/header.component';
export * from './components/header-page/header-page.component';
export * from './components/footer/footer.component';
export * from './components/slider/slider.component';
export * from './components/banner-bg-image/banner-bg-image.component';
export * from './components/banner-default/banner-default.component';
export * from './components/card/card.component';
export * from './components/header-tarjeta/header-tarjeta.component';
export * from './components/content-box/content-box.component';
export * from './components/content-tab-tarjeta/content-tab-tarjeta.component';
export * from './components/compare/compare.component';
export * from './components/card-contact/card-contact.component';
export * from './components/faq/faq.component';
export * from './components/loader/loader.component';
export * from './components/compare-mobile/compare-mobile.component';

export * from './directives/ga.directive';
export * from './directives/datepicker.directive';
export * from './directives/scrollto.directive';
export * from './directives/jarallax.directive';
export * from './directives/swiper.directive';
export * from './directives/headroom.directive';
export * from './directives/dropdown.directive';

export * from './pipes/marked.pipe';

export * from "./services/contenful.service";

export * from "./animations/animations";

@NgModule({
  imports: [
    CommonModule
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
})
export class FifUiKitAngularBase {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FifUiKitAngularBase,
      providers: [ContenfulService]
    };
  }
}
