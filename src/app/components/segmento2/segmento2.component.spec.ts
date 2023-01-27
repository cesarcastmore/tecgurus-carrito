import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Segmento2Component } from './segmento2.component';

describe('Segmento2Component', () => {
  let component: Segmento2Component;
  let fixture: ComponentFixture<Segmento2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Segmento2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Segmento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
