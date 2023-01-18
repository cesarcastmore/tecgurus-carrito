import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Product } from '../models/product';
import { DragDropService } from '../services/drag-drop.service';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {


  @HostBinding('style.backgroundColor') backgroundColor: string = '';




  @Input() product: Product | null = null;

  constructor(private dragDrop: DragDropService) {

  }

  @HostListener('mouseover')
  onMouseOver() {
    this.backgroundColor = 'red';
  }



  @HostListener('mouseout')
  onMouseOut() {
    this.backgroundColor = 'green';
  }

  @HostListener('drag')
  onDrag() {

    if (this.product)
      this.dragDrop.add(this.product);


  }

}
