import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo8Component } from './capitulo8.component';

describe('Capitulo8Component', () => {
  let component: Capitulo8Component;
  let fixture: ComponentFixture<Capitulo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
