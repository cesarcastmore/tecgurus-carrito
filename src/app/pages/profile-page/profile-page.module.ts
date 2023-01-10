import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileModule } from 'src/app/profile/profile.module';
import { ButtonsModule } from 'src/app/buttons/buttons.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { CrudComponent } from './pages/crud/crud.component';
import { SettingsComponent } from './pages/settings/settings.component';


@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent,
    CrudComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    ProfileModule,
    ButtonsModule
  ]
})
export class ProfilePageModule { }
