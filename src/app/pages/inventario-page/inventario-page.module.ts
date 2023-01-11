import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioPageRoutingModule } from './inventario-page-routing.module';
import { InventarioComponent } from './inventario.component';


@NgModule({
  declarations: [
    InventarioComponent
  ],
  imports: [
    CommonModule,
    InventarioPageRoutingModule
  ]
})
export class InventarioPageModule { }
