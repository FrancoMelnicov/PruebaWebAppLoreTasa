import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoja4Component } from './hoja4.component';

describe('Hoja4Component', () => {
  let component: Hoja4Component;
  let fixture: ComponentFixture<Hoja4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hoja4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hoja4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
