import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoja3Component } from './hoja3.component';

describe('Hoja3Component', () => {
  let component: Hoja3Component;
  let fixture: ComponentFixture<Hoja3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hoja3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hoja3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
