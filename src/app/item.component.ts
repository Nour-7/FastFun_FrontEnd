import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'


@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styles: [`
    
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class ItemComponent {
    item
    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    pInfo: any = null
    currentRate : Number
    editData1 : any = {}

    constructor(private apiService: ApiService, private route: ActivatedRoute) { }
    ngOnInit() {

        this.route.params.subscribe(paramMap => {
            this.apiService.getPlaceInfo(paramMap.pname).subscribe(res => {
                this.pInfo = res
                this.currentRate = this.pInfo.Rate
            });

        });
    }

    delete() {
        this.apiService.deletePlace(this.pInfo._id)  
    }

    edit(e) {
        console.log(e)
        this.editData1.name = e.name
        this.editData1 = e
        console.log(this.pInfo._id)
        this.apiService.putPlace(this.pInfo._id, this.editData1)    
    }

    goBackPage(){
        window.history.back()
    }
}
