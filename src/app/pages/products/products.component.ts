import { Component, ElementRef, OnInit, Query, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Product } from 'src/app/models/product';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BreadcrumbsComponent } from 'src/app/templates/breadcrumbs/breadcrumbs.component';
import { ProductComponent } from 'src/app/components/product/product.component';

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

  @ViewChildren("cardDiv") cards: QueryList<ElementRef> | null= null;

  @ViewChild(BreadcrumbsComponent) breadcrumbs: BreadcrumbsComponent | null= null;

  @ViewChildren(ProductComponent) productsComponent: QueryList<ProductComponent> | null= null;

  consulta: string = '';
  modalRef?: BsModalRef;

  constructor(private productService: ProductosService, private carrito: CarritoService,
    private modalService: BsModalService, private render: Renderer2) {

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

  aplicarPromo(){

    let contador: number=0;

    this.cards?.forEach((card: ElementRef)=>  {
      if(this.products[contador].precio >= 5000 ){
        this.render.setStyle(card.nativeElement, 'background-color', 'yellow');
      }
      contador++;
    })





  }

  aumentarPrecio(){

    this.productsComponent?.forEach((productComponent: ProductComponent)=> {
       productComponent.product!.precio = productComponent.product!.precio *1.05;

    });

  }
  
}
