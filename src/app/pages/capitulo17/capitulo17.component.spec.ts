import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo17Component } from './capitulo17.component';

describe('Capitulo17Component', () => {
  let component: Capitulo17Component;
  let fixture: ComponentFixture<Capitulo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
