import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoja2Component } from './hoja2.component';

describe('Hoja2Component', () => {
  let component: Hoja2Component;
  let fixture: ComponentFixture<Hoja2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hoja2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hoja2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
