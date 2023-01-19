import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarritoLineaComponent } from 'src/app/components/carrito-linea/carrito-linea.component';
import { TotalComponent } from 'src/app/components/total/total.component';
import { CarritoLinea } from 'src/app/models/carrito-linea';
import { Cliente } from 'src/app/models/cliente';
import { AlertService } from 'src/app/services/alert.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit, AfterViewInit {

  carritoLineas: CarritoLinea[] = [];
  clientes$: Observable<Cliente[]> | null = null;

  @ViewChild('inputDom') inputDom: ElementRef<HTMLInputElement> | null = null;



  @ViewChild(TotalComponent) totalComponent: TotalComponent | null = null;

  @ViewChildren(CarritoLineaComponent) lineasComponent: QueryList<CarritoLineaComponent> | null= null;


  total: number = 0;

  clienteForm: FormGroup = new FormGroup({
    idcliente: new FormControl()
  })

  promoForm: FormGroup = new FormGroup({
    code: new FormControl()
  })

  constructor(private carritoService: CarritoService,
    private notif: AlertService, private render: Renderer2) { }


  ngOnInit(): void {
    this.carritoLineas = this.carritoService.getCarritoLineas();

    this.carritoLineas.forEach(item => {
      this.total = this.total + (item.cantidad * item.costo);
    });

    this.clientes$= this.carritoService.getClientes();

    this.promoForm.valueChanges.subscribe(value => {
      console.log(value);
      if (value.code === 'TECGURUS') {
        this.render.setStyle(this.inputDom?.nativeElement, 'background-color', 'yellow');
      }
    })

  }


  public removeLinea(carritoLinea: CarritoLinea | null) {
    let index = this.carritoLineas.findIndex(item => item.idcompraproducto === carritoLinea?.idcompraproducto);
    this.carritoService.delete(index);
    this.carritoLineas = this.carritoService.getCarritoLineas();

    this.total = 0;
    this.carritoLineas.forEach(item => {
      this.total = this.total + (item.cantidad * item.costo);
    })

  }

  public updateLinea(carritoLinea: CarritoLinea | null) {
    let index = this.carritoLineas.findIndex(item => item.idcompraproducto === carritoLinea?.idcompraproducto);


    if (carritoLinea != null) {
      this.carritoService.update(index, carritoLinea);
      this.carritoLineas = this.carritoService.getCarritoLineas();

      this.total = 0;
      this.carritoLineas.forEach(item => {
        this.total = this.total + (item.cantidad * item.costo);
      })
    }


  }

  public completar() {

   /*let cliente = this.clientes.find(cliente => cliente.idcliente === Number(this.clienteForm.get('idcliente')?.value));
    let fecha = new Date().toJSON().toString();

    this.carritoLineas = this.carritoLineas.map(linea => {
      delete linea.idcompraproducto;
      return linea;
    })

    if (cliente) {
      this.carritoService.completarCompra({
        cliente: cliente,
        fecha: fecha,
        total: this.total,
        compraproductos: this.carritoLineas,
        usuario: {
          idusuario: 1
        }
      }).subscribe(value => {
        this.carritoService.clear();
        this.carritoLineas = [];
        this.total = 0;
        this.clienteForm.reset();
        this.notif.notify('success', 'Se ha completado el pedido');

      })

    }*/

  }

  applyPromo() {

    this.totalComponent?.promo();

  }

  applyMeses(){

    for(let i=0; i< this.carritoLineas.length; i++){
      if(this.carritoLineas[i].costo > 5000){
        let lineaComp: CarritoLineaComponent | undefined = this.lineasComponent?.get(i) ;
        lineaComp!.color='yellow';


      }
    }


  }


  //https://www.mattspaulding.org/The-Curious-Case-of-Angular-and-the-Infinite-Change-Event-Loop/
  ngAfterViewInit(): void {

    setTimeout(()=> {
      this.totalComponent?.setTotal(this.total);

    }, 500);

  }

}
