import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarritoLinea } from 'src/app/models/carrito-linea';
import { Cliente } from 'src/app/models/cliente';
import { AlertService } from 'src/app/services/alert.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carritoLineas: CarritoLinea[]=[];
  clientes: Cliente[]=[];

  total: number=0;

  clienteForm: FormGroup=new FormGroup({
    idcliente: new FormControl()
  })

  constructor(private carritoService: CarritoService, private notif: AlertService) { }

  ngOnInit(): void {
    this.carritoLineas= this.carritoService.getCarritoLineas();

    this.carritoLineas.forEach(item=> {
      this.total= this.total + (item.cantidad*item.costo);
    });

    this.carritoService.getClientes().subscribe(clientes=> {
      this.clientes= clientes;
    })
  }


  public removeLinea(carritoLinea: CarritoLinea | null){
    let index= this.carritoLineas.findIndex(item=> item.idcompraproducto=== carritoLinea?.idcompraproducto);
    this.carritoService.delete(index);
    this.carritoLineas= this.carritoService.getCarritoLineas();

    this.total=0;
    this.carritoLineas.forEach(item=> {
      this.total= this.total + (item.cantidad*item.costo);
    })
    
  }

  public updateLinea(carritoLinea: CarritoLinea | null){
    let index= this.carritoLineas.findIndex(item=> item.idcompraproducto=== carritoLinea?.idcompraproducto);


    if(carritoLinea != null ){
      this.carritoService.update(index, carritoLinea);
      this.carritoLineas= this.carritoService.getCarritoLineas();

      this.total=0;
      this.carritoLineas.forEach(item=> {
        this.total= this.total + (item.cantidad*item.costo);
      })
    }

    
  }

  public completar(){

    let cliente = this.clientes.find(cliente=>  cliente.idcliente=== Number(this.clienteForm.get('idcliente')?.value));
    let fecha= new Date().toJSON().toString();

    this.carritoLineas= this.carritoLineas.map(linea=> {
      delete linea.idcompraproducto;
      return linea;
    })

    if(cliente){
      this.carritoService.completarCompra({
        cliente: cliente,
        fecha: fecha, 
        total: this.total, 
        compraproductos: this.carritoLineas,
        usuario: {
          idusuario:1
        }
      }).subscribe(value=> {
        this.carritoService.clear();
        this.carritoLineas=[];
        this.total=0;
        this.clienteForm.reset();
        this.notif.notify('success', 'Se ha completado el pedido');

      })
      
    }

 


  }

}
