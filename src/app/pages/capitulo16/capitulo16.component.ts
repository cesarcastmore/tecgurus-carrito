import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { StoreApp } from 'src/app/models/store-app';
import { closeLoading } from 'src/app/store/loading.actions';
import { loading_product } from 'src/app/store/product.actions';
import { ProductsState } from 'src/app/store/product.reducer';
import { getItems, getMessage, getSuccess} from '../../store/products.selectors'

@Component({
  selector: 'app-capitulo16',
  templateUrl: './capitulo16.component.html',
  styleUrls: ['./capitulo16.component.css']
})
export class Capitulo16Component implements OnInit {

  products$: Observable<Product[]> | null= null;
  message$: Observable<string> | null= null;
  success$: Observable<boolean> | null= null;


  constructor(private store: Store<StoreApp>) { }

  ngOnInit(): void {

     this.products$ = this.store.select(getItems);
    this.message$ = this.store.select(getMessage);
    this.success$ = this.store.select(getSuccess);


    this.store.dispatch(closeLoading());

    this.store.dispatch(loading_product());

   

  }

}
