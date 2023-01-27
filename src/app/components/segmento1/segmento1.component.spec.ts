import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segmento1Component } from './segmento1.component';

describe('Segmento1Component', () => {
  let component: Segmento1Component;
  let fixture: ComponentFixture<Segmento1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Segmento1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Segmento1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
