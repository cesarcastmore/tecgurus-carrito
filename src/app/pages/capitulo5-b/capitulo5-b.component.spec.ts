import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo5BComponent } from './capitulo5-b.component';

describe('Capitulo5BComponent', () => {
  let component: Capitulo5BComponent;
  let fixture: ComponentFixture<Capitulo5BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo5BComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo5BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
