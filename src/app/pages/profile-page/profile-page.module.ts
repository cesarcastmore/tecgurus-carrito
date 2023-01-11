import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileModule } from 'src/app/profile/profile.module';
import { ButtonsModule } from 'src/app/buttons/buttons.module';
import { OverviewComponent } from './overview/overview.component';
import { SettingsComponent } from './settings/settings.component';
import { CrudComponent } from './crud/crud.component';


@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent,
    SettingsComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    ProfileModule,
    ButtonsModule
  ]
})
export class ProfilePageModule { }
