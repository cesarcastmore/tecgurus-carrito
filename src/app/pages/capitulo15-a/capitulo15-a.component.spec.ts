import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo15AComponent } from './capitulo15-a.component';

describe('Capitulo15AComponent', () => {
  let component: Capitulo15AComponent;
  let fixture: ComponentFixture<Capitulo15AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo15AComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo15AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
