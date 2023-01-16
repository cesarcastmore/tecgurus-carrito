import { Component, ElementRef, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Product } from 'src/app/models/product';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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

  consulta: string = '';
  modalRef?: BsModalRef;

  @ViewChildren("ispromotions") ispromotions: QueryList<ElementRef>| null= null;

  @ViewChildren(ProductComponent) productsComponent: QueryList<ProductComponent>| null= null;



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
  }




  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  promo(){

    let contador:number=0;

    console.log(this.ispromotions);

    this.ispromotions?.forEach((promotion: ElementRef)=> {

      if(this.products[contador].precio > 5000){

        console.log("entrooo");
        this.render.setStyle(promotion.nativeElement, 'background-color', 'yellow');

      }

      contador++;

    });

    

  }

  aumentar(){

    this.productsComponent?.forEach((productComponent: ProductComponent)=> {
      productComponent.product!.precio = productComponent.product!.precio  *1.1;
    })

  }

   
}
