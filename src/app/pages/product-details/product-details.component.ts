import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCommentsComponent } from 'src/app/components/product-comments/product-comments.component';
import { ProductDescriptionComponent } from 'src/app/components/product-description/product-description.component';
import { ProductQuestionsComponent } from 'src/app/components/product-questions/product-questions.component';

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


  constructor(private route: ActivatedRoute, private factory: ComponentFactoryResolver) {

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');


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
