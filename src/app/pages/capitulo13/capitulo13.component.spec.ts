import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo13Component } from './capitulo13.component';

describe('Capitulo13Component', () => {
  let component: Capitulo13Component;
  let fixture: ComponentFixture<Capitulo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
