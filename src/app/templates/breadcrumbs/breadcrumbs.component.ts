import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  subtitle: string='';

  constructor() { }

  ngOnInit(): void {
    console.log("fui iniciado");

  }

  setSubtitle(subtitle: string){
    this.subtitle= subtitle;

  }

  ngOnDestroy(): void {
      console.log("fui destruido");
  }

}
