import { Component ,Input } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http'
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
    admin : boolean 
    constructor(private apiService: ApiService, private route: ActivatedRoute, private http: HttpClient)  { }
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
}
