import { Component} from '@angular/core'
import { AuthService } from './auth.service'
import { ApiService } from './api.service'
//import { FilterPipe } from './filter.pipe'
 
@Component({
  selector: 'home',
  templateUrl:'./home.component.html',
  
})
export class HomeComponent {
  categories = []
  places = []
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(private apiService: ApiService)  { }
  ngOnInit(){
      
      this.apiService.getCategories().subscribe(res =>{
          this.categories = res
         
      });
      this.apiService.getPlaces().subscribe(res =>{
        this.places = res
        console.log('done')
      });
      
  }
 
}