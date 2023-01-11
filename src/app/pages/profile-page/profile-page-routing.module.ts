import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: ProfileComponent, 
    children: [{
      path: '', redirectTo: 'overview', pathMatch: 'full'
    },
      {path: 'overview', component:OverviewComponent}, //profile/ovewview
      {path: 'settings', component: SettingsComponent},  //profile/settings
      {path: 'crud', component: CrudComponent} // //profile/crud
    ] }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
