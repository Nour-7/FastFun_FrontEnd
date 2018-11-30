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


    constructor(private apiService: ApiService, private route: ActivatedRoute) { }
    ngOnInit() {

       

        this.route.params.subscribe(paramMap => {
            this.apiService.getPlaceInfo(paramMap.pname).subscribe(res => {
                this.pInfo = res
            });

        });
    }
}
