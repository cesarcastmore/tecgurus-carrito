import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo5Opcion4Component } from './capitulo5-opcion4.component';

describe('Capitulo5Opcion4Component', () => {
  let component: Capitulo5Opcion4Component;
  let fixture: ComponentFixture<Capitulo5Opcion4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo5Opcion4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo5Opcion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
