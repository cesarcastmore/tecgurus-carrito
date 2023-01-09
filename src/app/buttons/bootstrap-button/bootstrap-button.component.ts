import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bootstrap-button',
  templateUrl: './bootstrap-button.component.html',
  styleUrls: ['./bootstrap-button.component.css']
})
export class BootstrapButtonComponent implements OnInit {

  @Input() title: string='';
  @Input() type: string= '';
  @Output() onClick: EventEmitter<boolean>= new EventEmitter<boolean>();



  constructor() { }

  ngOnInit(): void {
  }

}
