import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  modalRef?: BsModalRef;

  @ViewChild("template") template: TemplateRef<any> | null= null;

  constructor(private modalService: BsModalService){

  }


  ngOnInit(): void {
    setTimeout(()=> {
      if(this.template){
        this.modalRef = this.modalService.show(this.template);

      }

    }, 2000);
    
  }
 
}
