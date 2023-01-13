import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

 public total:number= 0;

  constructor() { }

  ngOnInit(): void {
  }


  public setTotal(total: number){
    this.total= total;

  }

  public promo(){
    this.total = this.total * 0.75;
  }

}
