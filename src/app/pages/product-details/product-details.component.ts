import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductCommentsComponent } from 'src/app/components/product-comments/product-comments.component';
import { ProductDescriptionComponent } from 'src/app/components/product-description/product-description.component';
import { ProductQuestionsComponent } from 'src/app/components/product-questions/product-questions.component';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: string | null = '';
  @ViewChild("dynamic", { static: true, read: ViewContainerRef }) dynamic: ViewContainerRef | null = null;


  diccionario: any[] = [{
    type: 'description',
    title: ''
  }, {
    type: 'commits'
  }, {
    type: 'questions'
  }]

  product: Product | null= null;

  constructor(private route: ActivatedRoute, private factory: ComponentFactoryResolver) {

  }


  ngOnInit(): void {

     this.route.data.subscribe((resolver: any)=> {

      this.product= resolver.product;


     });

    /*this.product$?.subscribe(item=> {
      console.log(item);
    })*/


    for (let linea of this.diccionario) {
      if (linea.type === 'description') {
        let questionComponent = this.factory.resolveComponentFactory(ProductDescriptionComponent);
        let questionsEmbbededComponent = this.dynamic?.createComponent(questionComponent);
        //questionsEmbbededComponent?.instance.title=linea.title;
      } else if (linea.type === 'commits') {
        let commnetsComponent = this.factory.resolveComponentFactory(ProductCommentsComponent);
        let commentsEmbbededComponent = this.dynamic?.createComponent(commnetsComponent);
      } else if (linea.type === 'questions'){
        let commnetsComponent = this.factory.resolveComponentFactory(ProductQuestionsComponent);
        let commentsEmbbededComponent = this.dynamic?.createComponent(commnetsComponent);
      }
    }


  }

}
