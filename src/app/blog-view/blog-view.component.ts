import { Component, OnInit, OnDestroy } from '@angular/core';

import {ActivatedRoute, Router } from '@angular/router'
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService:BlogHttpService, private toastr:ToastrService, private location:Location) {

   }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data)
        this.currentBlog=data["data"]

      },
      error => {
        console.log("some error occured")
        console.log(error.errorMessage)

      }
      
    );
  }

  public deleteThisBlog():any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        this.toastr.success('Blog Deleted successfully','Success!');
        setTimeout(() =>{
          this.router.navigate(['/home']);
        }),1000
      },

      error => {
        console.log(error.errorMessage)
        this.toastr.error('Some error occured','Error');
      }
    )
  }

  public goBackToPreviousPage() : any {
    this.location.back();
  }
  
  ngOnDestroy() {

    }
  

}
