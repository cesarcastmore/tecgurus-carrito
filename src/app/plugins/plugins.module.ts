import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginExample1Component } from './plugin-example1/plugin-example1.component';
import { PluginExample2Component } from './plugin-example2/plugin-example2.component';
import { PluginComponent } from './plugin/plugin.component';



@NgModule({
  declarations: [
    PluginExample1Component,
    PluginExample2Component,
    PluginComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    PluginComponent
  ]
})
export class PluginsModule { }
