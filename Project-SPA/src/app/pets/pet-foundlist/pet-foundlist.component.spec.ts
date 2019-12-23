/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetFoundListComponent } from './pet-foundlist.component';

describe('PetFoundListComponent', () => {
  let component: PetFoundListComponent;
  let fixture: ComponentFixture<PetFoundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetFoundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetFoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
