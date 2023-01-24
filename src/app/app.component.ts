import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PluginsService } from './services/plugins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  modalRef?: BsModalRef;

  @ViewChild("template") template: TemplateRef<any> | null= null;

  constructor(private modalService: BsModalService,
    private pluginService: PluginsService){

  }


  ngOnInit(): void {

    this.pluginService.open$.subscribe((component: any)=> {
      if(this.template){
        this.modalRef = this.modalService.show(this.template);
      }
    })

    this.pluginService.close$.subscribe(()=> {
        this.modalRef?.hide();
    })
    
    
  }
 
}
