import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo15CComponent } from './capitulo15-c.component';

describe('Capitulo15CComponent', () => {
  let component: Capitulo15CComponent;
  let fixture: ComponentFixture<Capitulo15CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo15CComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo15CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
