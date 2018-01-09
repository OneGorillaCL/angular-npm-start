import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTarjetaComponent } from './header-tarjeta.component';

describe('HeaderTarjetaComponent', () => {
  let component: HeaderTarjetaComponent;
  let fixture: ComponentFixture<HeaderTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
