import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBgImageComponent } from './banner-bg-image.component';

describe('BannerBgImageComponent', () => {
  let component: BannerBgImageComponent;
  let fixture: ComponentFixture<BannerBgImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerBgImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerBgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
