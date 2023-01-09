import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Product } from 'src/app/models/product';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categorias: Categoria[]=[];

  categorizarPor: Categoria | null=null;

  consulta: string = '';

  constructor(private productService: ProductosService, private carrito: CarritoService) {

   }

  ngOnInit(): void {

    this.productService.getProductos().subscribe((products: Product[])=>{
      this.products= products;
    });

    this.productService.getCategorias().subscribe((categorias: Categoria[])=>{
      this.categorias= categorias;
    })

  }
  find(event : any) {
    this.consulta =  event.target.value;
  }

  categorizar(categoria: Categoria){
    this.categorizarPor= categoria;
  }


  agregarCarrito(producto: Product){
    this.carrito.add({
      costo: producto.precio,
      cantidad: 1,
      producto: producto,
      idcompraproducto: Math.random()

    })

  }
}
