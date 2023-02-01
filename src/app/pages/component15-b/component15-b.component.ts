import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-component15-b',
  templateUrl: './component15-b.component.html',
  styleUrls: ['./component15-b.component.css']
})
export class Component15BComponent implements OnInit {

  cardsSuject$: Subject<any[]> = new Subject<any[]>();

  cards: any[]=[];
  cards$: Observable<any[]> | null= null;

  constructor(private detector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.detector.detach();


    this.cardsSuject$.asObservable().pipe(
      debounceTime(1000)
    ).subscribe(cards=> {
      this.detector.detectChanges();
    })

 

  }

  add(){
    this.cards.push('hola');
    this.cardsSuject$.next(this.cards);
  }

}
