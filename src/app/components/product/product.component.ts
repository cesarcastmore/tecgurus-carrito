import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { CarritoService } from 'src/app/services/carrito.service';
import { openAlert } from 'src/app/store/alert.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product | null = null;

  constructor(private carrito: CarritoService,
    private store$: Store<any>) { }

  ngOnInit(): void {
  }

  agregarCarrito(producto: Product | null) {

    if (producto) {
      this.carrito.add({
        costo: producto.precio,
        cantidad: 1,
        producto: producto,
        idcompraproducto: Math.random()

      })

      this.store$.dispatch(openAlert({
        message: 'Se ha subido el producto',
        tipo: 'success'
      }))
    }



  }

}
