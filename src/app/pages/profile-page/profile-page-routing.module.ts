import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from 'src/app/profile/profile.module';
import { CrudComponent } from './pages/crud/crud.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [{ path: '', component: ProfileComponent, 
children: [
  { path: '', redirectTo: 'overview', pathMatch: 'full'},
  {path: 'overview', component:  OverviewComponent },
  {path: 'crud', component: CrudComponent},
  {path: 'settings', component: SettingsComponent}
] }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ProfileModule],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
