import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo6Component } from './capitulo6.component';

describe('Capitulo6Component', () => {
  let component: Capitulo6Component;
  let fixture: ComponentFixture<Capitulo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
