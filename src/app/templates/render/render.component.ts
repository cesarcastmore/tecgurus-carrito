import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {

  @Input() plantilla: TemplateRef<any>| null= null;

  constructor() { }

  ngOnInit(): void {
  }

}
