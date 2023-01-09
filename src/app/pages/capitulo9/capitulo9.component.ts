import { Component, OnInit } from '@angular/core';
import { FakeProduct } from 'src/app/models/fake-product';
import { FakeProductsService } from 'src/app/services/fake-products.service';

@Component({
  selector: 'app-capitulo9',
  templateUrl: './capitulo9.component.html',
  styleUrls: ['./capitulo9.component.css']
})
export class Capitulo9Component implements OnInit {

  product: FakeProduct | undefined ;

  constructor(private productService: FakeProductsService) { }

  ngOnInit(): void {
    this.productService.getProductById('1').subscribe(fakeProduct=>{
      this.product = fakeProduct;
    })
  }

}
