import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuComponent, MenuListComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [MenuListComponent]
})
export class MenusModule { }
