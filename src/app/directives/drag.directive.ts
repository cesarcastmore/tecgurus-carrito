import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Product } from '../models/product';
import { DragDropService } from '../services/drag-drop.service';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @HostBinding('style.backgroundColor')  color: string='';
  @Input() product: Product | null= null;

  constructor(private dragDrop: DragDropService) { 

  }

  

  @HostListener('mouseout')
  mouseOut(){
    this.color='red';
  }

  @HostListener('mouseover')
  mouseOver(){
    this.color='green';
  }

  @HostListener('drag')
  drag(){

    this.dragDrop.drag(this.product);

  }

}
