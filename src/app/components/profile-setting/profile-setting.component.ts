import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})
export class ProfileSettingComponent implements OnInit {

  @Input() fullName: string = '';
  @Input() userName: string = '';
  @Input() password: string = '';
  @Input() email: string = '';

  @Output() onSave : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  save(){
    this.onSave.emit(true);
  }

}
