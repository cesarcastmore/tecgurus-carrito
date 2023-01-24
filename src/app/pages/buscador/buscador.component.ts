import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, takeUntil, mergeMap, concatMap, switchMap, tap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  private url: string = 'https://curso.tgconsulting.online/minipos/api/producto/busqueda/';

  searchForm: FormGroup = new FormGroup({
    texto: new FormControl()
  })

  productos: Product[] = [];

  productos$: Observable<Product[]> | null = null;

  constructor(private http: HttpClient,
    private auth: AuthService) { }

  ngOnInit(): void {

    let searchForm$: Observable<any>= this.searchForm.valueChanges;
    let textForm$: Observable<string>  = searchForm$.pipe(
      map(form=> form.texto),
      debounceTime(500), 
      distinctUntilChanged()
      );


      //outerValue
    textForm$.subscribe(query=>{

      let producto$: Observable<Product[]> =this.getProductos(query);
      producto$.subscribe(productos=> {
        //innerValue
        this.productos=productos;
      })
    })

    /*let searchForm$: Observable<any> = this.searchForm.valueChanges;

    let textForm$: Observable<string> = searchForm$.pipe(
      map(form => form.texto),
      debounceTime(500),
      distinctUntilChanged()
    );

    this.productos$ = textForm$.pipe(
      switchMap((text: string) => {


        console.log(text);
        return this.getProductos(text)
          .pipe(tap(() => console.log("entro")));
      })


    )*/







  }


  public getProductos(query: string): Observable<Product[]> {

    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ' + this.auth.jwt);
    return this.http.get<Product[]>(this.url + query, { headers })
  }

}
