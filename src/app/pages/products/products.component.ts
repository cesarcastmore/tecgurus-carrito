import { Component, ElementRef, OnInit, Query, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { Product } from 'src/app/models/product';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BreadcrumbsComponent } from 'src/app/templates/breadcrumbs/breadcrumbs.component';
import { ProductComponent } from 'src/app/components/product/product.component';
import { debounceTime, distinctUntilChanged, filter, map, mergeMap, Observable, of, tap } from 'rxjs';
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

  categorizarPor: Categoria | null = null;

  searchForm: FormGroup= new FormGroup({
    query: new FormControl()
  })

  query$: Observable<string> | undefined; 




  isShow: boolean = true;

  @ViewChildren("cardDiv") cards: QueryList<ElementRef> | null = null;

  @ViewChild(BreadcrumbsComponent) breadcrumbs: BreadcrumbsComponent | null = null;

  @ViewChildren(ProductComponent) productsComponent: QueryList<ProductComponent> | null = null;

  consulta: string = '';
  modalRef?: BsModalRef;

  product$: Observable<Product[]> | undefined ;

  constructor(private productService: ProductosService, private carrito: CarritoService,
    private modalService: BsModalService, private render: Renderer2,
    private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.query$ = this.searchForm.get('query')?.valueChanges
    .pipe(
      tap((value)=> console.log("1",value)),
      debounceTime(1000),
       tap((value)=> console.log("2",value)),
       distinctUntilChanged(),
       tap((value)=> console.log("3",value)),
       filter((value: string)=>  value !== ''),
       tap((value)=> console.log("4",value)),
       map((value: string)=>  value.charAt(0).toUpperCase() + value.slice(1))

      );

    



    this.categorias$ = this.productService.getCategorias();


    //Cambias las rutas con un observable

    let category$: Observable<number> =  this.activatedRoute.queryParams.pipe(
      map((value: any)=> Number(value['category_id']))
    );
    
   /*category$.subscribe((category_id: number) => {
      this.productService.getProductos().subscribe((products: Product[]) => {

        this.products= products.filter(product=> {
          return product.categoria.idcategoria === category_id;
        })


      });
    })*/

    this.product$ =this.activatedRoute.queryParams.pipe(
      map((value: any)=> Number(value['category_id'])),
      mergeMap((category_id: number)=>{
        return this.productService.getProductos().pipe(
          map((productos:Product[])=> {

            let pds: Product[] =  productos.filter(product=> {
              return product.categoria.idcategoria === category_id;
            })
            return pds;

          })
        )
      }
    )
    );

  }
  find(event: any) {
    this.consulta = event.target.value;
  }

  categorizar(categoria: Categoria) {
    this.categorizarPor = categoria;
    this.breadcrumbs?.setSubtitle(categoria.nombre);
    this.isShow = false;

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { category_id: categoria.idcategoria },
        queryParamsHandling: "merge", // remove to replace all query params by provided
      })


  }


  agregarCarrito(producto: Product) {
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

  aplicarPromo() {

    let contador: number = 0;

    this.cards?.forEach((card: ElementRef) => {
      if (this.products[contador].precio >= 5000) {
        this.render.setStyle(card.nativeElement, 'background-color', 'yellow');
      }
      contador++;
    })





  }

  aumentarPrecio() {

    this.productsComponent?.forEach((productComponent: ProductComponent) => {
      productComponent.product!.precio = productComponent.product!.precio * 1.05;

    });

  }

}
