import { Directive, HostListener } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  constructor(private dragDrop: DragDropService) { 

  }

  @HostListener('dragover', ['$event'])
  public dragOver(event: any){
    event.preventDefault();
  }




  @HostListener('drop')
  drop(){

    this.dragDrop.drop();

  
    
  }

}
