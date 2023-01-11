import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioPageRoutingModule } from './inventario-page-routing.module';
import { InventarioComponent } from './inventario.component';
import { TemplatesModule } from 'src/app/templates/templates.module';


@NgModule({
  declarations: [
    InventarioComponent
  ],
  imports: [
    CommonModule,
    InventarioPageRoutingModule,
    TemplatesModule
  ]
})
export class InventarioPageModule { }
