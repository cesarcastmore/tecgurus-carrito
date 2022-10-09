import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Capitulo3Component } from './components/capitulo3/capitulo3.component';
import { Capitulo4Component } from './components/capitulo4/capitulo4.component';
import { Capitulo2Component } from './pages/capitulo2/capitulo2.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [{
  path: 'profile', component: ProfileComponent
}, {
  path: 'products', component: ProductsComponent
},{
  path: 'login', component: LoginComponent
},{
  path: 'capitulo2', component: Capitulo2Component
},{
  path: 'capitulo3', component: Capitulo3Component
},{
  path: 'capitulo4', component: Capitulo4Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
