import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-capitulo15-a',
  templateUrl: './capitulo15-a.component.html',
  styleUrls: ['./capitulo15-a.component.css']
})
export class Capitulo15AComponent implements OnInit {

  public option: any= {
    tabName: 'tab1'
  }

  formItem: FormGroup= new FormGroup({
    name: new FormControl(),
    street: new FormControl()
  })


  user: any= {
    name: 'nombre'
  }

  address: any= {
    street:'Miguel Hidalgo'
  }

  constructor() { 

  }

  ngOnInit(): void {

    this.formItem.get('name')?.valueChanges.subscribe(name=> {
      this.user= {...this.user, name: name };

    })

    
    this.formItem.get('street')?.valueChanges.subscribe(name=> {
      this.address.street= name;

    })

    let a1: string='a';
    let b1: string= a1;

    this.sonIguales(a1, b1);

  

    let a2: any= {
      name: 'cesar'
    };

    let b2: any= a2;
    this.sonIguales(a2, b2);


    

    let a3: any= {
      name: 'cesar'
    };

    let b3: any= a3;
    b3.name= 'carlos';

    this.sonIguales(a3, b3);

    let a4: any={
      name: 'cesar'
    };
    let b4: any= JSON.parse(JSON.stringify(a4));
    this.sonIguales(a4, b4);


    let a5: any= {
      name: 'cesar'
    };
    let b5: any= {...a5, name: 'carlos'};
    this.sonIguales(a5,b5)



  }


  public sonIguales(a: any, b: any){
    if(a !== b){
      console.log("no son iguales");

    }else {
      console.log("son iguales");
    }

  }

  show(name: string){
    this.option.tabName= name;

  }

}
