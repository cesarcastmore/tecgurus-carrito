import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategorizarPipe } from './pipes/categorizar.pipe';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CarritoLineaComponent } from './components/carrito-linea/carrito-linea.component';

import { ProfileModule } from './profile/profile.module';
import { MenusModule } from './menus/menus.module';
import { ButtonsModule } from './buttons/buttons.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TotalComponent } from './components/total/total.component';
import { TemplatesModule } from './templates/templates.module';
import { ProductComponent } from './components/product/product.component';
import { PluginsModule } from './plugins/plugins.module';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductQuestionsComponent } from './components/product-questions/product-questions.component';
import { ProductCommentsComponent } from './components/product-comments/product-comments.component';
import { DragDirective } from './directives/drag.directive';
import { DropDirective } from './directives/drop.directive';
import { ErrorDirective } from './directives/error.directive';
import { Capitulo13Component } from './pages/capitulo13/capitulo13.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { Capitulo15AComponent } from './capitulo15-a/capitulo15-a.component';
import { UsuarioComponent } from './capitulo15-a/usuario/usuario.component';
import { DireccionComponent } from './capitulo15-a/direccion/direccion.component';
import { Component15AaComponent } from './pages/component15-aa/component15-aa.component';
import { Tab1Component } from './components/tab1/tab1.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { Tab3Component } from './components/tab3/tab3.component';
import { Component15BComponent } from './pages/component15-b/component15-b.component';
import { CardComponent } from './components/card/card.component';
import { StoreModule } from '@ngrx/store';
import { loadingReducer } from './store/loading.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
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
    TotalComponent,
    ProductComponent,
    ProductDescriptionComponent,
    ProductQuestionsComponent,
    ProductCommentsComponent,
    DragDirective,
    DropDirective,
    ErrorDirective,
    Capitulo13Component,
    BuscadorComponent,
    Capitulo15AComponent,
    UsuarioComponent,
    DireccionComponent,
    Component15AaComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Component15BComponent,
    CardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProfileModule,
    MenusModule,
    ButtonsModule,
    ModalModule.forRoot(),
    TemplatesModule,
    PluginsModule, 
    StoreModule.forRoot({
      loading: loadingReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true // Pauses recording actions and state changes when the extension window is not open
    })

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
