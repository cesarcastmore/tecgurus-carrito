import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo5Opcion1Component } from './capitulo5-opcion1.component';

describe('Capitulo5Opcion1Component', () => {
  let component: Capitulo5Opcion1Component;
  let fixture: ComponentFixture<Capitulo5Opcion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo5Opcion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo5Opcion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
