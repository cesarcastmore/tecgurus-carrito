import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';
import { StoreApp } from 'src/app/models/store-app';
import { closeLoading } from 'src/app/store/loading.actions';
import { loading_product } from 'src/app/store/product.actions';
import { ProductsState } from 'src/app/store/product.reducer';
import { getSuccess } from 'src/app/store/products.selectors';

@Component({
  selector: 'app-capitulo17',
  templateUrl: './capitulo17.component.html',
  styleUrls: ['./capitulo17.component.css']
})
export class Capitulo17Component implements OnInit {

  productState: ProductsState | null= null;

  constructor(private store: Store<StoreApp>) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.store.dispatch(closeLoading());
    }, 500);
    this.loadStatus();

  }

  async loadStatus(){

    let success = await this.store.select(getSuccess).pipe(first()).toPromise();
    if(!success){
      this.store.dispatch(loading_product())
    }
  

  }

}
