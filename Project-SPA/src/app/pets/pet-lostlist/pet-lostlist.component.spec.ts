/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetLostlistComponent } from './pet-lostlist.component';

describe('PetLostlistComponent', () => {
  let component: PetLostlistComponent;
  let fixture: ComponentFixture<PetLostlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetLostlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetLostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
