import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo9Component } from './capitulo9.component';

describe('Capitulo9Component', () => {
  let component: Capitulo9Component;
  let fixture: ComponentFixture<Capitulo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
