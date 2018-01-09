import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDefaultComponent } from './banner-default.component';

describe('BannerDefaultComponent', () => {
  let component: BannerDefaultComponent;
  let fixture: ComponentFixture<BannerDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
