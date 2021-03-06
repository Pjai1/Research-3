/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestlistComponent } from './testlist.component';

describe('TestlistComponent', () => {
  let component: TestlistComponent;
  let fixture: ComponentFixture<TestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
