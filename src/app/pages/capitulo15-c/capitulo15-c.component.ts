import { ChangeDetectionStrategy, Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Segmento1Component } from 'src/app/components/segmento1/segmento1.component';
import { Segmento2Component } from 'src/app/components/segmento2/segmento2.component';

@Component({
  selector: 'app-capitulo15-c',
  templateUrl: './capitulo15-c.component.html',
  styleUrls: ['./capitulo15-c.component.css']
})
export class Capitulo15CComponent implements OnInit , AfterViewChecked{

  @ViewChild(Segmento1Component) segment1: Segmento1Component | null= null;
  @ViewChild(Segmento2Component) segment2: Segmento1Component | null= null;

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

    this.formItem.get('name')?.valueChanges.subscribe((name: string)=> {
      this.user.name= name;

    })

    
    this.formItem.get('street')?.valueChanges.subscribe((name: string)=> {
      this.address.street= name;

    })


    this.formItem.valueChanges.pipe(
      debounceTime(2000)
    ).subscribe(value=> {
      this.segment1?.update();
      this.segment2?.update();
    })

 



  }

  ngAfterViewChecked(): void {
   console.log('Method not implemented.');
  }
}
