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
import { Capitulo2Component } from './pages/capitulo2/capitulo2.component';
import { Capitulo2InputComponent } from './components/capitulo2-input/capitulo2-input.component';
import { Capitulo2OutputComponent } from './components/capitulo2-output/capitulo2-output.component';
import { Capitulo3Component } from './pages/capitulo3/capitulo3.component';
import { Capitulo4Component } from './pages/capitulo4/capitulo4.component';
import { Capitulo5Component } from './pages/capitulo5/capitulo5.component';

import { Capitulo5Opcion1Component } from './components/capitulo5-opcion1/capitulo5-opcion1.component';
import { Capitulo5Opcion2Component } from './components/capitulo5-opcion2/capitulo5-opcion2.component';
import { Capitulo5Opcion3Component } from './components/capitulo5-opcion3/capitulo5-opcion3.component';
import { Capitulo5Opcion4Component } from './components/capitulo5-opcion4/capitulo5-opcion4.component';
import { Capitulo5AComponent } from './pages/capitulo5-a/capitulo5-a.component';
import { Capitulo5BComponent } from './pages/capitulo5-b/capitulo5-b.component';

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
    ProfileSupportComponent,
    Capitulo2Component,
    Capitulo2InputComponent,
    Capitulo2OutputComponent,
    Capitulo3Component,
    Capitulo4Component,
    Capitulo5Component,
    Capitulo5Opcion1Component,
    Capitulo5Opcion2Component,
    Capitulo5Opcion3Component,
    Capitulo5Opcion4Component,
    Capitulo5AComponent,
    Capitulo5BComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
