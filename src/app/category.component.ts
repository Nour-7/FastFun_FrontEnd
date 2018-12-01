import { Component ,Input } from '@angular/core';
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
    categories = []
    places :string []= []
    cat = ''
    location = 'Any'
    @Input() name: string= '';
    placesByCat  :string []= []

    constructor(private apiService: ApiService, private route: ActivatedRoute)  { }
    ngOnInit() {
        this.apiService.getCategories().subscribe(res =>{
            this.categories = res
        });

        this.route.params.subscribe(paramMap=> {   
                this.cat = paramMap.cname;
        });

        this.apiService.getPlaces().subscribe(res =>{
            this.places = res
        });
        
        this.apiService.getPlacesByCategory(this.cat).subscribe(res =>{
            this.placesByCat = res
        });
    
    }
      
}
