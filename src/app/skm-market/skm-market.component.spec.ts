import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkmMarketComponent } from './skm-market.component';

describe('SkmMarketComponent', () => {
  let component: SkmMarketComponent;
  let fixture: ComponentFixture<SkmMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkmMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkmMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
