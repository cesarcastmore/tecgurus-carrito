import { Component, OnInit, ViewChild, ViewContainerRef , ComponentFactoryResolver} from '@angular/core';
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

  @ViewChild("dynamic", { static: true, read: ViewContainerRef}) dynamic: ViewContainerRef | null= null;

  id: string | null= '';
  constructor(private route:ActivatedRoute,
    private factory: ComponentFactoryResolver) {

   }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    let  componentDescription= this.factory.resolveComponentFactory(ProductDescriptionComponent);
    let componentDescriptionEmbbeded = this.dynamic?.createComponent(componentDescription);


    let  componentQuestion= this.factory.resolveComponentFactory(ProductQuestionsComponent);
    let componentQuestionEmbbeded = this.dynamic?.createComponent(componentQuestion);


    let  componentComments= this.factory.resolveComponentFactory(ProductCommentsComponent);
    let componentCommentsEmbbeded = this.dynamic?.createComponent(componentComments);


  }

}
