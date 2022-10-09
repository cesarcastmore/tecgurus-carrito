import { Component, OnInit , Input} from '@angular/core';


@Component({
  selector: 'app-capitulo2-input',
  templateUrl: './capitulo2-input.component.html',
  styleUrls: ['./capitulo2-input.component.css']
})
export class Capitulo2InputComponent implements OnInit {

  @Input() message:string='';

  

  constructor() { }

  ngOnInit(): void {
  }

}
