import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo7Component } from './capitulo7.component';

describe('Capitulo7Component', () => {
  let component: Capitulo7Component;
  let fixture: ComponentFixture<Capitulo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
