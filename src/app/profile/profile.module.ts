import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { ProfileTabsComponent } from './profile-tabs/profile-tabs.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { ProfileSupportComponent } from './profile-support/profile-support.component';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [    
    ProfileMenuComponent,
    ProfileTabsComponent,
    ProfileSettingComponent,
    ProfileSupportComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ], exports: [
    ProfileMenuComponent,
    ProfileTabsComponent,
    ProfileSettingComponent,
    ProfileSupportComponent

  ]
})
export class ProfileModule { 

}
