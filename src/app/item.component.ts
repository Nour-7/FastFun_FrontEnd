import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute} from '@angular/router'
@Component({
    selector: 'item',
    templateUrl: './item.component.html'
})
export class ItemComponent {
    item
    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    postMsg = ''
    constructor(private apiService: ApiService, private route: ActivatedRoute)  { }
    ngOnInit(){
        var id =this.route.snapshot.params.id
        
        this.apiService.getItem(id).subscribe(data =>{
           this.item = data
        })
        
    }
    // post() {
    //     this.apiService.postMessage({msg: this.postMsg})
    // }
   
}
