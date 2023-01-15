import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public estilo: any={};

  @Input() product: Product | null = null;

  constructor(private carrito: CarritoService) {

  }

  ngOnInit(): void {
  }


  agregarCarrito(producto: Product | null) {
    if (producto) {
      this.carrito.add({
        costo: producto.precio,
        cantidad: 1,
        producto: producto,
        idcompraproducto: Math.random(),
    

      })
    }

  }

  setColor(color: string){
    this.estilo.backgroundColor=color;
  }

}
