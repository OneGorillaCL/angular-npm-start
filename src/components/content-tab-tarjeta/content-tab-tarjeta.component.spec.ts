import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTabTarjetaComponent } from './content-tab-tarjeta.component';

describe('ContentTabTarjetaComponent', () => {
  let component: ContentTabTarjetaComponent;
  let fixture: ComponentFixture<ContentTabTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTabTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTabTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
