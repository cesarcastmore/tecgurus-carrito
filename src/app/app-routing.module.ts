import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Capitulo3Component } from './pages/capitulo3/capitulo3.component';
import { Capitulo4Component } from './pages/capitulo4/capitulo4.component';
import { Capitulo2Component } from './pages/capitulo2/capitulo2.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Capitulo5Component } from './pages/capitulo5/capitulo5.component';

import { Capitulo5Opcion1Component } from './components/capitulo5-opcion1/capitulo5-opcion1.component';
import { Capitulo5Opcion2Component } from './components/capitulo5-opcion2/capitulo5-opcion2.component';
import { Capitulo5Opcion3Component } from './components/capitulo5-opcion3/capitulo5-opcion3.component';
import { Capitulo5Opcion4Component } from './components/capitulo5-opcion4/capitulo5-opcion4.component';

import { Capitulo5AComponent } from './pages/capitulo5-a/capitulo5-a.component';
import { Capitulo5BComponent } from './pages/capitulo5-b/capitulo5-b.component';


const routes: Routes = [{
  path: 'profile', component: ProfileComponent
}, {
  path: 'products', component: ProductsComponent
}, {
  path: 'login', component: LoginComponent
}, {
  path: 'capitulo2', component: Capitulo2Component
}, {
  path: 'capitulo3', component: Capitulo3Component
}, {
  path: 'capitulo4', component: Capitulo4Component
}, {
  path: 'capitulo5', component: Capitulo5Component,
  children: [{
    path: '', redirectTo: 'opcion1', pathMatch: 'full'
  },
  {
    path: 'opcion1', component: Capitulo5Opcion1Component
  }, {
    path: 'opcion2', component: Capitulo5Opcion2Component
  }, {
    path: 'opcion3', component: Capitulo5Opcion3Component
  }, {
    path: 'opcion4', component: Capitulo5Opcion4Component
  }],
}, {
  path: 'capitulo5/:id', 
  component: Capitulo5AComponent,
  children: [{
    path: 'opcion', component: Capitulo5BComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
