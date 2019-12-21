/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetRegistComponent } from './pet-regist.component';

describe('PetRegistComponent', () => {
  let component: PetRegistComponent;
  let fixture: ComponentFixture<PetRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
