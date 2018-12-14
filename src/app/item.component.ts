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
    UserRate : Number
    PlaceRate : Number
    editData1 : any = {}
    show : boolean = true
    rateEdit: String = "rate"
    constructor(private apiService: ApiService, private route: ActivatedRoute) { }
    ngOnInit() {
        this.route.params.subscribe(paramMap => {
            this.apiService.getPlaceInfo(paramMap.pname).subscribe(res => {
                this.pInfo = res
                this.editData1 = this.pInfo
                if(this.pInfo.Count == 0){
                    this.PlaceRate = 0
                }
                else this.PlaceRate = this.pInfo.Sum / this.pInfo.Count
                
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
        console.log(e)
        this.editData1.name = e.name
        this.editData1 = e
        console.log(this.pInfo._id)
        this.apiService.putPlace(this.pInfo._id, this.editData1)
        
        // this.router.navigate(['/'])
        
    }

    postRate() {
        this.show = false
        //console.log(this.currentRate)
        if(this.rateEdit == "rate"){
            this.apiService.postRate({rate: this.UserRate , place_id: this.pInfo._id})
            this.editData1.Sum += this.UserRate
            this.editData1.Count++;
            this.apiService.putPlace(this.pInfo._id, this.editData1)
        }
        // this.router.navigate(['/'])
        
    }
}
