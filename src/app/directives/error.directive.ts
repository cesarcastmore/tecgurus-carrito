import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appError]'
})
export class ErrorDirective implements OnInit {

  @HostBinding('style.borderColor') bordeColor: string | null = null;

  @Input() isError: boolean = false;

  constructor() {


  }
  ngOnInit(): void {
    if (this.isError) {
      this.bordeColor = 'red';
    }
  }

}
