import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo5Component } from './capitulo5.component';

describe('Capitulo5Component', () => {
  let component: Capitulo5Component;
  let fixture: ComponentFixture<Capitulo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
