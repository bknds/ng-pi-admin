/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Levels-1-1Component } from './levels-1-1.component';

describe('Levels-1-1Component', () => {
  let component: Levels-1-1Component;
  let fixture: ComponentFixture<Levels-1-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Levels-1-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Levels-1-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
