import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { PluginsService } from 'src/app/services/plugins.service';
import { PluginExample1Component } from '../plugin-example1/plugin-example1.component';
import { PluginExample2Component } from '../plugin-example2/plugin-example2.component';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.css']
})
export class PluginComponent implements OnInit {

  @ViewChild("dynamic", { static: true, read: ViewContainerRef }) plugin: ViewContainerRef | null = null;

  constructor(private factory: ComponentFactoryResolver,
    private pluginService: PluginsService) {

  }

  ngOnInit(): void {

    let lastResult: any = this.pluginService.putPlugin$.getValue();


    let componentPlugin1 = this.factory.resolveComponentFactory(lastResult);
    let component1 = this.plugin?.createComponent(componentPlugin1);



    /*
    let componentPlugin1= this.factory.resolveComponentFactory(PluginExample1Component);
    let component1 = this.plugin?.createComponent(componentPlugin1);
    
    component1!.instance.titulo='Cesar'

    let componentPlugin2= this.factory.resolveComponentFactory(PluginExample2Component);
    let component2 = this.plugin?.createComponent(componentPlugin2);*/

    /*setTimeout(()=> {
      this.plugin?.clear();
    }, 5000);*/

  }

}
