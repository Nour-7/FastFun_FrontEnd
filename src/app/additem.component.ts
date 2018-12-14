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
  category = []
  constructor(private apiService: ApiService, private router: Router, private modalService: NgbModal) { }
  ngOnInit() {
    this.apiService.getCategories().subscribe(res => {
      this.category = res
      console.log(this.category[3])
    });
  }
  post() {
    this.apiService.postPlace(this.itemData).subscribe(id => 
      this.itemData.img = id +".png"
    );
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}