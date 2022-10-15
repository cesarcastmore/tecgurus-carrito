import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo5Opcion3Component } from './capitulo5-opcion3.component';

describe('Capitulo5Opcion3Component', () => {
  let component: Capitulo5Opcion3Component;
  let fixture: ComponentFixture<Capitulo5Opcion3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo5Opcion3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo5Opcion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
