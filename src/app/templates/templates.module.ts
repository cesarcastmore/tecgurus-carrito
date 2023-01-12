import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';



@NgModule({
  declarations: [
    ModalComponent,
    BreadcrumbsComponent,
    CustomModalComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[ModalComponent, BreadcrumbsComponent, CustomModalComponent]
})
export class TemplatesModule { }
