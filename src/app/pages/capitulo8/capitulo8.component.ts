import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-caapitulo8',
  templateUrl: './capitulo8.component.html',
  styleUrls: ['./capitulo8.component.css']
})
export class Capitulo8Component implements OnInit, OnDestroy {

nombre : string ="";
contador : number = 0;

  constructor(private service:MyServiceService) {

   }

  ngOnInit(): void {

    this.nombre =this.service.getNombre();
    this.contador = this.service.contador;
    this.service.contador++;
    
    console.log("Inicio")
    this.getObservable().subscribe(value=>{
      console.log(value);
    });

    console.log("Termino");

    this.getObservableAPI().subscribe(value=>{
      console.log("API1");
    });

    this.getObservableAPI().subscribe(value=>{
      console.log("API2");
    });

    this.getObservableAPI().subscribe(value=>{
      console.log("API3");
    });
  }

  getObservable(): Observable<number>{
    return Observable.create((observer: any)=>{
      observer.next(0);
      setTimeout(()=>{
        observer.next(1);
      },2000);
      setTimeout(()=>{
        observer.next(2);
      },4000);
      setTimeout(()=>{
        observer.complete();
      },5000);
    });
  }

  getObservableAPI(): Observable<number>{
    return Observable.create((observer: any)=>{
      observer.next(0);
      setTimeout(()=>{
        observer.next(1);
        observer.complete();
      },500);
    });
  }

   ngOnDestroy(): void {
    console.log("Limpiando componenete")
  }
}
