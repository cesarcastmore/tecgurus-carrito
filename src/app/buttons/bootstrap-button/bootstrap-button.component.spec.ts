import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapButtonComponent } from './bootstrap-button.component';

describe('BootstrapButtonComponent', () => {
  let component: BootstrapButtonComponent;
  let fixture: ComponentFixture<BootstrapButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
