import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'


@Component({
    selector: 'upload',
    templateUrl: './upload.component.html'
})
export class UploadComponent {
    

    constructor(private apiService: ApiService, private route: ActivatedRoute) { }
    ngOnInit() {
      
    }
}
