import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-profile-support',
  templateUrl: './profile-support.component.html',
  styleUrls: ['./profile-support.component.css']
})
export class ProfileSupportComponent implements OnInit {
  modalRef?: BsModalRef;

  constructor( private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
