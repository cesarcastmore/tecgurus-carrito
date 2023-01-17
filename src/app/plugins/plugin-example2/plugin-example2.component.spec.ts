import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginExample2Component } from './plugin-example2.component';

describe('PluginExample2Component', () => {
  let component: PluginExample2Component;
  let fixture: ComponentFixture<PluginExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginExample2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluginExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
