/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Levels-2Component } from './levels-2.component';

describe('Levels-2Component', () => {
  let component: Levels-2Component;
  let fixture: ComponentFixture<Levels-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Levels-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Levels-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
