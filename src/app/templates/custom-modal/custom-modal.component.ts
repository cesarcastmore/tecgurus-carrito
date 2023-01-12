import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnInit {

  @Input() header: TemplateRef<any> | null= null;
  @Input() body: TemplateRef<any> | null= null;
  @Input() footer: TemplateRef<any> | null= null;

  constructor() { }

  ngOnInit(): void {
  }

}
