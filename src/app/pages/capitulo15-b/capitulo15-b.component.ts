import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-capitulo15-b',
  templateUrl: './capitulo15-b.component.html',
  styleUrls: ['./capitulo15-b.component.css']

})
export class Capitulo15BComponent implements OnInit {

  cards: any[] = [];

  changeCards: Subject<boolean> = new Subject<boolean>();



  constructor(private detector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.detector.detach();


    this.changeCards.
      pipe(debounceTime(500)).subscribe(value => {
        this.detector.detectChanges();
      });


  /*    setTimeout(() => {
        this.detector.reattach();
      }, 4000)*/


  }


  addCard() {

    this.changeCards.next(true);

    this.cards.push({
      header: 'Encabezado ',
      description: 'Descritpion '
    });


  }
}
