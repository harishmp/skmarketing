import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3v4treeComponent } from './d3v4tree.component';

describe('D3v4treeComponent', () => {
  let component: D3v4treeComponent;
  let fixture: ComponentFixture<D3v4treeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3v4treeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3v4treeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
