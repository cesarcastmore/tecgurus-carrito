import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-capitulo13',
  templateUrl: './capitulo13.component.html',
  styleUrls: ['./capitulo13.component.css']
})
export class Capitulo13Component implements OnInit, OnDestroy {

  public observable$: Observable<number> | null = null;
  public subscription$: Subscription | undefined;

  public observableAPI$: Observable<any[]> | null = null;


  public productos$: Observable<Product[]> | null = null;




  constructor(private http: HttpClient,
    private auth: AuthService) { }


  ngOnInit(): void {
    this.observable$ = this.createObservable();


    /*this.subscription$ = this.observable$?.subscribe(value => {
      console.log(value);
    }, error => {
      console.log(error)
    }, () => {
      console.log("complete");
    });*/


    /*setTimeout(() => {
      this.subscription$?.unsubscribe()

    }, 3000)*/



    /*this.observableAPI$ = this.createObservableAPI();

    this.observableAPI$?.subscribe(value=> {
      console.log(value);
    }, error=> {
      console.log(error)
    }, ()=>{
      console.log("complete");
    } );

*/
    this.productos$ = this.getProductos();
    /*this.productos$?.subscribe(value => {
      console.log(value);
    }, error => {
      console.log(error)
    }, () => {
      console.log("complete");
    })*/

    /*this.createPromise().then(value=> {
      console.log(value);
    })*/

    


    this.getTripleObservable();


  }


  public createObservable(): Observable<number> | null {
    return Observable.create((observer: any) => {

      setTimeout(() => {
        observer.next(10);

      }, 2000)


      setTimeout(() => {
        observer.next(11);

      }, 4000)

      setTimeout(() => {
        observer.next(13);

      }, 6000);


      setTimeout(() => {
        observer.complete();

      }, 80000);


      /*setTimeout(()=> {
        observer.error('error');

      }, 7000)*/

    })
  }

  public createObservableAPI(): Observable<any[]> | null {
    return Observable.create((observer: any) => {

      setTimeout(() => {
        observer.next([{
          name: 'tecgurus1'
        }, {
          name: 'tecgurus2'
        }, {
          name: 'tecgurus3'
        }]

        );
        observer.complete();
      }, 1000)


    })
  }


  public getProductos(): Observable<Product[]> {

    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ' + this.auth.jwt);
    return this.http.get<Product[]>("https://curso.tgconsulting.online/minipos/api/producto", { headers })

  }


  public createPromise(){
    return new Promise((resolve, reject)=> {
      setTimeout(() => {
        resolve(1);
      }, 3000);
    })
  }


  async getTripleObservable(){

    let producto1= await this.getProductos().toPromise();
    console.log(producto1)
    let producto2= await this.getProductos().toPromise();
    console.log(producto2)

    let producto3= await this.getProductos().toPromise();
    console.log(producto2)

  }


  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }

}
