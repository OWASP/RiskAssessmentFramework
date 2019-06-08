import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10Component } from './top10.component';

describe('Top10Component', () => {
  let component: Top10Component;
  let fixture: ComponentFixture<Top10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
