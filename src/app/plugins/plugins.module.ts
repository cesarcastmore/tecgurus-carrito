import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginComponent } from './plugin/plugin.component';
import { PluginExample1Component } from './plugin-example1/plugin-example1.component';
import { PluginExample2Component } from './plugin-example2/plugin-example2.component';



@NgModule({
  declarations: [
    PluginComponent,
    PluginExample1Component,
    PluginExample2Component
  ],
  imports: [
    CommonModule
  ], exports: [PluginComponent]
})
export class PluginsModule { }
