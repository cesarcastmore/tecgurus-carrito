import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo5Opcion2Component } from './capitulo5-opcion2.component';

describe('Capitulo5Opcion2Component', () => {
  let component: Capitulo5Opcion2Component;
  let fixture: ComponentFixture<Capitulo5Opcion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo5Opcion2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo5Opcion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
