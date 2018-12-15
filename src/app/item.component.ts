import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'item',
    templateUrl: './item.component.html'
})
export class ItemComponent {
    item
    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    //pname = "Mince"
    pInfo: any = null
    UserRate : number
    PlaceRate : Number
    editData1 : any = {}
    show : boolean = false
    isratted: Number
    cacheKey : any;
    admin: boolean
    constructor(private apiService: ApiService, private route: ActivatedRoute, private http: HttpClient) {
        this.cacheKey = Math.random().toString();
    }
    ngOnInit() {
        this.isAdmin()

        this.route.params.subscribe(paramMap => {
            this.apiService.getPlaceInfo(paramMap.pname).subscribe(res => {
                this.pInfo = res
                this.editData1 = this.pInfo
                if(this.pInfo.Count == 0){
                    this.PlaceRate = 0
                }
                else this.PlaceRate = this.pInfo.Sum / this.pInfo.Count

               //this.ratted = this.apiService.Rated(this.pInfo._id)
                //console.log(this.ratted)
                this.apiService.Rated(this.pInfo._id).subscribe(res =>{
                    if(!res.length){
                        this.show = true
                    }
                });
            });

        });
        
    }

    isAdmin(){
        this.http.get( 'http://localhost:3000/isadmin').subscribe(res =>{},error =>{
           if(error.status == 200){
               this.admin = true;
           }
           else if(error.status == 401){
              this.admin = false;
           }
           console.log(this.admin)
       })
       
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

    postRate() {
        this.show = false
        //console.log(this.currentRate)
        this.apiService.postRate({rate: this.UserRate , place_id: this.pInfo._id})
        this.editData1.Sum += this.UserRate
        this.editData1.Count++;
        this.apiService.putPlace(this.pInfo._id, this.editData1)
    }
    
    goBackPage(){
        window.history.back()
    }
}
