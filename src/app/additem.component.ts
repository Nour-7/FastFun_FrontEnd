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
    c = ''
    categorie
    constructor(private apiService: ApiService, private router: Router, private modalService: NgbModal) {}
    ngOnInit() {
      this.apiService.getCategories().subscribe(res =>{
          this.categorie = res
      });
    }
    post() {
        this.itemData.img=this.itemData.name +".png"
        //if (this.itemData.name && this.itemData.description && this.itemData.category) {
        this.apiService.postPlace(this.itemData)
        console.log(this.itemData)
           
   //  }
    }

    openLg(content) {
    this.modalService.open(content, { size: 'lg' });
    }

}