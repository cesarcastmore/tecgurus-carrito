import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarritoLinea } from 'src/app/models/carrito-linea';

@Component({
  selector: 'app-carrito-linea',
  templateUrl: './carrito-linea.component.html',
  styleUrls: ['./carrito-linea.component.css']
})
export class CarritoLineaComponent implements OnInit {

  formCarritoLinea: FormGroup= new FormGroup({
    cantidad: new FormControl()
    
  })

  @Input() carritoLinea: CarritoLinea | null= null;

  @Output() onDelete: EventEmitter<CarritoLinea | null>= new EventEmitter<CarritoLinea | null>();
  @Output() onUpdate: EventEmitter<CarritoLinea  | null>= new EventEmitter<CarritoLinea  | null>();

  constructor() { }

  ngOnInit(): void {

    this.formCarritoLinea.get('cantidad')?.setValue(this.carritoLinea?.cantidad);
  }

  actualizar(){
    this.carritoLinea!.cantidad= this.formCarritoLinea.get('cantidad')?.value;
    this.onUpdate.emit(this.carritoLinea);

  }

  borrar(){
    this.onDelete.emit(this.carritoLinea);
  }

}
