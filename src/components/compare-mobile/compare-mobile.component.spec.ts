import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareMobileComponent } from './compare-mobile.component';

describe('CompareMobileComponent', () => {
  let component: CompareMobileComponent;
  let fixture: ComponentFixture<CompareMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
