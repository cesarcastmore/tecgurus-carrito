import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapButtonComponent } from './bootstrap-button/bootstrap-button.component';



@NgModule({
  declarations: [
    BootstrapButtonComponent
  ],
  imports: [
    CommonModule
  ], exports:[BootstrapButtonComponent]
})
export class ButtonsModule { }
