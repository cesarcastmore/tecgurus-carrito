import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';
import { ProfileSettingComponent } from './components/profile-setting/profile-setting.component';
import { ProfileSupportComponent } from './components/profile-support/profile-support.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    ProfileComponent,
    ProductsComponent,
    LoginComponent,
    MenuComponent,
    ProfileMenuComponent,
    ProfileTabsComponent,
    ProfileSettingComponent,
    ProfileSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
