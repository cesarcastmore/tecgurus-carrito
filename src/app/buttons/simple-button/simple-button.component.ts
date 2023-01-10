import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.css']
})
export class SimpleButtonComponent implements OnInit {

  @Input() title: string='';
  @Input() type: string='success';

  @Output() onClick: EventEmitter<boolean>= new EventEmitter<boolean>();



  constructor() { }

  ngOnInit(): void {
  }

  onPress(){

    this.onClick.emit(true);

  }

}
