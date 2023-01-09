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
import { TecgurusComponent } from './pages/tecgurus/tecgurus.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { Capitulo6Component } from './components/capitulo6/capitulo6.component';
import { FormatoPipe } from './pipes/formato.pipe';
import { BuscadorPipe } from './pipes/buscador.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { Capitulo7Component } from './pages/capitulo7/capitulo7.component';
import { Capitulo9Component } from './pages/capitulo9/capitulo9.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorizarPipe } from './pipes/categorizar.pipe';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CarritoLineaComponent } from './components/carrito-linea/carrito-linea.component';
import { InventarioComponent } from './pages/inventario/inventario.component';

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
    TecgurusComponent,
    ProductDetailsComponent,
    Capitulo6Component,
    FormatoPipe,
    BuscadorPipe,
    Capitulo7Component,
    Capitulo9Component,
    CategorizarPipe,
    CarritoComponent,
    CarritoLineaComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
