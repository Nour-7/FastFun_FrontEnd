import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { $ } from 'protractor';

@Component({
  selector: 'add-item',
  templateUrl: './additem.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class AddItemComponent {
    closeResult: string;
    itemData: any = {}
    ErrorMessage = ""
    constructor(private apiService: ApiService, private router: Router, private modalService: NgbModal) {}

    post() {
        console.log(this.itemData)
        if (this.itemData.name && this.itemData.description && this.itemData.category) {
            this.apiService.addItem(this.itemData).subscribe(res => {

                this.router.navigate(['/'])
            }, error => {
                if (error.status == 401) {
                    this.ErrorMessage = "Error"
                }
            })
        }
    }

    openLg(content) {
    this.modalService.open(content, { size: 'lg' });
    }

}