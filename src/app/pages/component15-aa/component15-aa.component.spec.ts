import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15AaComponent } from './component15-aa.component';

describe('Component15AaComponent', () => {
  let component: Component15AaComponent;
  let fixture: ComponentFixture<Component15AaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component15AaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component15AaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
