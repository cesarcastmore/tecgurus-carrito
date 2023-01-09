import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoLineaComponent } from './carrito-linea.component';

describe('CarritoLineaComponent', () => {
  let component: CarritoLineaComponent;
  let fixture: ComponentFixture<CarritoLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoLineaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
