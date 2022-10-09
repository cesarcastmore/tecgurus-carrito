import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-capitulo2-output',
  templateUrl: './capitulo2-output.component.html',
  styleUrls: ['./capitulo2-output.component.css']
})
export class Capitulo2OutputComponent implements OnInit {

  @Output() onText: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  changeMessage(){
    this.onText.emit('HOLA MUNDO');
  }

}
