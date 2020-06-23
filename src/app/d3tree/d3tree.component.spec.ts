import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3treeComponent } from './d3tree.component';

describe('D3treeComponent', () => {
  let component: D3treeComponent;
  let fixture: ComponentFixture<D3treeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3treeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3treeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
