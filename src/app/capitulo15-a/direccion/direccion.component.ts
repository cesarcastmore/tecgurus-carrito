import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DireccionComponent implements OnInit {
  @Input() direccion: any;

  constructor() { }

  ngOnInit(): void {
  }

  print(){
    console.log("renderice direccion");
  }

}
