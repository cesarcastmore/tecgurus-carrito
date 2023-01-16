import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginExample1Component } from '../plugin-example1/plugin-example1.component';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.css']
})
export class PluginComponent implements OnInit {

  @ViewChild("dynamic", { static: true, read:ViewContainerRef }) dynamic: ViewContainerRef | null = null;


  constructor(private factory: ComponentFactoryResolver) {

  }


  ngOnInit(): void {
      console.log("entrooo");
      let dynamicComponent = this.factory.resolveComponentFactory(PluginExample1Component);
      let component = this.dynamic?.createComponent(dynamicComponent);
   
  }



}
