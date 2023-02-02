import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo16Component } from './capitulo16.component';

describe('Capitulo16Component', () => {
  let component: Capitulo16Component;
  let fixture: ComponentFixture<Capitulo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
