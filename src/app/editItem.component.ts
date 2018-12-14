import { Component, ViewEncapsulation , Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { ItemComponent } from './item.component';
import { ActivatedRoute } from '@angular/router'
// import { Injectable } from '@angular/core';
// import { $ } from 'protractor';

@Component({
  selector: 'edit-item',
  templateUrl: './edititem.component.html',
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
export class EditItemComponent {
    closeResult: string;
    itemData: any = {}
    ErrorMessage = ""
    // editData : any = {}
    c = ''
    categorie = []
    
    @Input() editData: any = {};

    constructor(
      private apiService: ApiService,
      private router: Router,
      private modalService: NgbModal, 
      private itemComponent: ItemComponent,
      private route: ActivatedRoute) {}
    ngOnInit() {
      this.route.params.subscribe(paramMap => {
        this.apiService.getPlaceInfo(paramMap.pname).subscribe(res => {
            this.editData = res
            
        });
      });

      this.apiService.getCategories().subscribe(res =>{
        this.categorie = res
      });


    }
    edit() {
        this.itemComponent.edit(this.editData)
        //this.router.navigate(['././item/{{editData.name}}'])
      
    }
    goBackPage(){
      window.history.back()
    }
    openLg(content) {
    this.modalService.open(content, { size: 'lg' });
    }

}