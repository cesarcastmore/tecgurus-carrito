import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo5AComponent } from './capitulo5-a.component';

describe('Capitulo5AComponent', () => {
  let component: Capitulo5AComponent;
  let fixture: ComponentFixture<Capitulo5AComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo5AComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo5AComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
