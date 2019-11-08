import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allBlogs=[];


  constructor(public blogHttpService:BlogHttpService) { 
    console.log("Home component constructor called")
  }

  ngOnInit() {
    console.log("Home componenet onInit called");
     
    this.blogHttpService.getAllBlogs().subscribe(
      apiResponse => {
        console.log("logging data")
        console.log(apiResponse);
        this.allBlogs=apiResponse['data'];
        
      },

      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }
  ngOnDestroy() {
  }

}
