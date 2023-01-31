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
import { Capitulo13Component } from './pages/capitulo13/capitulo13.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { IsActiveGuard } from './guards/is-active.guard';
import { IsLoginGuard } from './guards/is-login.guard';
import { IsVendedorGuard } from './guards/is-vendedor.guard';
import { Capitulo15AComponent } from './pages/capitulo15-a/capitulo15-a.component';
import { Capitulo15BComponent } from './pages/capitulo15-b/capitulo15-b.component';
import { ProductoResolver } from './resolvers/producto.resolver';
import { Capitulo15CComponent } from './pages/capitulo15-c/capitulo15-c.component';

const routes: Routes = [{
  path: '', 
  component: TecgurusComponent,
     children: [{
    path: '', redirectTo: 'profile', pathMatch: 'full'
  },
  { 
    path: 'profile', loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule),
    canActivate: [IsActiveGuard] 

  },
  
  {
    path: 'products', component: ProductsComponent,
    canActivate: [IsActiveGuard]

    
  }, {
    path: 'products/:id', component: ProductDetailsComponent,
    canActivate: [IsActiveGuard],
    resolve: {
      producto: ProductoResolver
    }
  }, {
    path: 'carrito', component: CarritoComponent,
    canActivate: [IsActiveGuard]
  }, {
    path: 'inventario',
    loadChildren: () => import('./pages/inventario-page/inventario-page.module').then(m => m.InventarioPageModule),
    canActivate: [IsActiveGuard, IsVendedorGuard]
  },
  {
    path: 'capitulo2', component: Capitulo2Component
  }, {
    path: 'capitulo3', component: Capitulo3Component
  }, {
    path: 'capitulo4', component: Capitulo4Component
  }, {
    path: 'capitulo5', component: Capitulo5Component
  }, {
    path: 'capitulo6', component: Capitulo6Component

  }, {
    path: 'capitulo7', component: Capitulo7Component

  }, {
    path: 'capitulo8', component: Capitulo8Component

  }, {
    path: 'capitulo9', component: Capitulo9Component

  }, {
    path: 'capitulo13', component: Capitulo13Component

  } ,{
    path: 'capitulo15-a', component: Capitulo15AComponent

  },{
    path: 'capitulo15-c', component: Capitulo15CComponent

  },{
    path: 'buscador', component: BuscadorComponent,
    canActivate: [IsActiveGuard]


  }]
}, {
  path: 'login', component: LoginComponent,
  canActivate: [IsLoginGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
