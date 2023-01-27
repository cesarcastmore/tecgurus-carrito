import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {
  @Input() direccion: any;

  constructor() { }

  ngOnInit(): void {
  }

  print(){
    console.log("renderice direccion");
  }

}
