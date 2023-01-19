import { Component, ElementRef, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Product } from 'src/app/models/product';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProductComponent } from 'src/app/components/product/product.component';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categorias$: Observable<Categoria[]> | null = null;

  categorizarPor: Categoria | null=null;

  searchForm: FormGroup= new FormGroup({
    search: new FormControl()
  })

  searcher$: Observable<string> | undefined; 

  consulta: string = '';
  modalRef?: BsModalRef;

  @ViewChildren("ispromotions") ispromotions: QueryList<ElementRef>| null= null;

  @ViewChildren(ProductComponent) productsComponent: QueryList<ProductComponent>| null= null;



  constructor(private productService: ProductosService, private carrito: CarritoService,
    private modalService: BsModalService, private render: Renderer2,
    private activedRouter: ActivatedRoute, private router: Router) {

   }

  ngOnInit(): void {

    this.searcher$ = this.searchForm.get("search")?.valueChanges;

    this.categorias$ = this.productService.getCategorias();

    this.activedRouter.queryParams.subscribe((query_params: any)=> {

      this.productService.getProductos().subscribe((products: Product[])=>{
        this.products= products.filter((pd: Product)=> {
          return pd.categoria.idcategoria === Number(query_params.category_id);

        })
      });

    
    })



  }
  find(event : any) {
    this.consulta =  event.target.value;
  }

  categorizar(categoria: Categoria){
    //this.categorizarPor= categoria;
    this.router.navigate(
      [],
      {
        relativeTo: this.activedRouter,
        queryParams: {category_id: categoria.idcategoria},
        queryParamsHandling: "merge", // remove to replace all query params by provided
      });
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
