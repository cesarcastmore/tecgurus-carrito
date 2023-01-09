import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MenuListComponent, MenuComponent],
  imports: [
    CommonModule, RouterModule
  ], exports : [
    MenuListComponent
  ]
})
export class MenusModule { }
