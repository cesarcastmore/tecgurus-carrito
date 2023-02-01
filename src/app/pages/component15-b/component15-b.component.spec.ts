import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component15BComponent } from './component15-b.component';

describe('Component15BComponent', () => {
  let component: Component15BComponent;
  let fixture: ComponentFixture<Component15BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component15BComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component15BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
