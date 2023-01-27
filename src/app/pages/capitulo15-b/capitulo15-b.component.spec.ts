import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo15BComponent } from './capitulo15-b.component';

describe('Capitulo15BComponent', () => {
  let component: Capitulo15BComponent;
  let fixture: ComponentFixture<Capitulo15BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo15BComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo15BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
