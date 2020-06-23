import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GojstreeComponent } from './gojstree.component';

describe('GojstreeComponent', () => {
  let component: GojstreeComponent;
  let fixture: ComponentFixture<GojstreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GojstreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GojstreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
