import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginExample1Component } from './plugin-example1.component';

describe('PluginExample1Component', () => {
  let component: PluginExample1Component;
  let fixture: ComponentFixture<PluginExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginExample1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
