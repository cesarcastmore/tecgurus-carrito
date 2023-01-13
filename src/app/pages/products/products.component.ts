import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Product } from 'src/app/models/product';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BreadcrumbsComponent } from 'src/app/templates/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categorias: Categoria[]=[];

  categorizarPor: Categoria | null=null;

  isShow: boolean= true;

  @ViewChild(BreadcrumbsComponent) breadcrumbs: BreadcrumbsComponent | null= null;

  consulta: string = '';
  modalRef?: BsModalRef;

  constructor(private productService: ProductosService, private carrito: CarritoService,
    private modalService: BsModalService) {

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
    this.breadcrumbs?.setSubtitle(categoria.nombre);
    this.isShow= false;
  }


  agregarCarrito(producto: Product){
    this.carrito.add({
      costo: producto.precio,
      cantidad: 1,
      producto: producto,
      idcompraproducto: Math.random()

    })

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
}
