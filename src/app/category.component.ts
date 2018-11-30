import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute} from '@angular/router'
@Component({
    selector: 'category',
    templateUrl: './category.component.html'
})
export class CategoryComponent {
    category
    //cname = "cafees"
    cInfo:any = null

    constructor(private apiService: ApiService, private route: ActivatedRoute)  { }
    ngOnInit(){
        this.route.params.subscribe(paramMap=> {
            this.apiService.getPlaceInfo(paramMap.cname).subscribe(res =>{
                this.cInfo = res
            });
        
        });
    }
}
