import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capitulo2OutputComponent } from './capitulo2-output.component';

describe('Capitulo2OutputComponent', () => {
  let component: Capitulo2OutputComponent;
  let fixture: ComponentFixture<Capitulo2OutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Capitulo2OutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capitulo2OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
