import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
