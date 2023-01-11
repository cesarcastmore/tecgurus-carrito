import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CardComponent } from './card/card.component';
import { RenderComponent } from './render/render.component';



@NgModule({
  declarations: [
   
    ModalComponent,
        BreadcrumbsComponent,
        CardComponent,
        RenderComponent
  ],
  imports: [
    CommonModule
  ], exports : [ ModalComponent, BreadcrumbsComponent, CardComponent, RenderComponent]
})
export class TemplatesModule { }
