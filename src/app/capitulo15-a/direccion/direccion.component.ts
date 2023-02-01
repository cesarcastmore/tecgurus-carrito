import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DireccionComponent implements OnInit {
  @Input() direccion: any;

  constructor(private detector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.detector.detach();
  }

  print(){
    console.log("renderice direccion");
  }


  public update(){
    this.detector.detectChanges();
  }

}
