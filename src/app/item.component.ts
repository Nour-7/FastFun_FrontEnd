import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'


@Component({
    selector: 'item',
    templateUrl: './item.component.html'
})
export class ItemComponent {
    item
    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    //pname = "Mince"
    pInfo: any = null
    currentRate : Number
    editData1 : any = {}
    cacheKey : any;

    constructor(private apiService: ApiService, private route: ActivatedRoute ) {
        this.cacheKey = Math.random().toString();
    }
    ngOnInit() {

        this.route.params.subscribe(paramMap => {
            this.apiService.getPlaceInfo(paramMap.pname).subscribe(res => {
                this.pInfo = res
                this.currentRate = this.pInfo.Rate
            });

        });
        
    }

    delete() {
        //console.log(this.postMsg)
        this.apiService.deletePlace(this.pInfo._id)
        
        // this.router.navigate(['/'])
        
    }
    edit(e) {
        //console.log(this.postMsg)
       
        
        // this.router.navigate(['/'])
        
    }
    goBackPage(){
        window.history.back()
    }
}
