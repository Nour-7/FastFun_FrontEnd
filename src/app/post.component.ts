import { Component, Input } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute} from '@angular/router'

@Component({
    selector: 'post',
    template: `
    <mat-card>
    <mat-card-header>
        <mat-card-title>
        <h4>Comments</h4>
        </mat-card-title>
    </mat-card-header>

    <mat-card-content>

        <form>
        <mat-form-field style="width: 100%">
        <textarea [(ngModel)]="postMsg" name="description" matInput placeholder="Post Message" ></textarea>
    </mat-form-field>
            <br/>
            <button (click)="post()" mat-raised-button color="primary">Post</button>
        </form>
    </mat-card-content>


</mat-card>
    `
})
export class PostComponent {
    constructor(private apiService: ApiService, private route: ActivatedRoute) { }
    postMsg = ''
    @Input() pname: String =''
    post() {
        console.log(this.postMsg)
        this.apiService.postMessage({msg: this.postMsg , PlaceId: this.pname})
        
        // this.router.navigate(['/'])
        
    }
}
