import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo2InputComponent } from './capitulo2-input.component';

describe('Capitulo2InputComponent', () => {
  let component: Capitulo2InputComponent;
  let fixture: ComponentFixture<Capitulo2InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo2InputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo2InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
