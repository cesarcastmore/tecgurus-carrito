import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugin-example1',
  templateUrl: './plugin-example1.component.html',
  styleUrls: ['./plugin-example1.component.css']
})
export class PluginExample1Component implements OnInit {

  titulo: string='Titulo';

  constructor() { }

  ngOnInit(): void {

    console.log("inicio");
  }

}
