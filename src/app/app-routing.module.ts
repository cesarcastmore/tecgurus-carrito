import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Capitulo3Component } from './pages/capitulo3/capitulo3.component';
import { Capitulo4Component } from './pages/capitulo4/capitulo4.component';
import { Capitulo2Component } from './pages/capitulo2/capitulo2.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { Capitulo5Component } from './pages/capitulo5/capitulo5.component';
import { TecgurusComponent } from './pages/tecgurus/tecgurus.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { Capitulo6Component } from './components/capitulo6/capitulo6.component';
import { Capitulo7Component } from './pages/capitulo7/capitulo7.component';
import { Capitulo8Component } from './pages/capitulo8/capitulo8.component';
import { Capitulo9Component } from './pages/capitulo9/capitulo9.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [{
  path: '', component: TecgurusComponent,
  children: [{
    path: '', redirectTo: 'profile', pathMatch: 'full'
  }, {
    path: 'products', component: ProductsComponent
  }, {
    path: 'products/:id', component: ProductDetailsComponent
  },{
    path: 'carrito', component: CarritoComponent
  },  {
    path: 'capitulo2', component: Capitulo2Component
  }, {
    path: 'capitulo3', component: Capitulo3Component
  }, {
    path: 'capitulo4', component: Capitulo4Component
  }, {
    path: 'capitulo5', component: Capitulo5Component
  }, {
    path: 'capitulo6', component: Capitulo6Component

  },{
    path: 'capitulo7', component: Capitulo7Component

  },{
    path: 'capitulo8', component: Capitulo8Component

  },{
    path: 'capitulo9', component: Capitulo9Component

  },  
  { path: 'profile', loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule) },
  { path: 'inventario', loadChildren: () => import('./pages/inventario-page/inventario-page.module').then(m => m.InventarioPageModule) }


]
}, {
  path: 'login', component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
