import { Directive, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { DragDropService } from '../services/drag-drop.service';
import { closeAlert, openAlert } from '../store/alert.actions';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  constructor(private dragDrop: DragDropService, private store: Store<any>) {

   }

   @HostListener('dragover', ['$event'])
   dragOver(event: any){
    event.preventDefault();
   }

   @HostListener('drop')
   drop(){
    this.dragDrop.drop();
    this.store.dispatch(openAlert({
      message: 'Se ha agregado al Carrito',
      types: 'info'
    }))

    /*setTimeout(()=> {
      this.store.dispatch(closeAlert());
    }, 2000)*/

   }

}
