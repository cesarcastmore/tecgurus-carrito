import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecgurusComponent } from './tecgurus.component';

describe('TecgurusComponent', () => {
  let component: TecgurusComponent;
  let fixture: ComponentFixture<TecgurusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecgurusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecgurusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
