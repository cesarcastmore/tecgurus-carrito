import { Component, TemplateRef, ViewChild, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Capitulo2Component } from './pages/capitulo2/capitulo2.component';
import { PluginExample1Component } from './plugins/plugin-example1/plugin-example1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild("plugin") plugin: TemplateRef<any> | null = null;

  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {

  }
  ngOnInit(): void {

    setTimeout(() => {
      if (this.plugin) {
        this.modalRef = this.modalService.show(this.plugin);
    
      }

    }, 2000)

  }


}
