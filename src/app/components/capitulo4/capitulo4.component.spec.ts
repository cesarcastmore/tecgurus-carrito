import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo4Component } from './capitulo4.component';

describe('Capitulo4Component', () => {
  let component: Capitulo4Component;
  let fixture: ComponentFixture<Capitulo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
