import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2019-09-15T07:13:34.123Z",
      "created": "2019-09-15T07:13:34.123Z",
      "tags": [],
      "author": "Mohit Kataria",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2019-09-15T07:13:34.123Z",
      "created": "2019-09-15T07:13:34.123Z",
      "tags": [],
      "author": "Mohit Kataria",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 2 description and this is edited",
      "title": "This is an example blog"
    },
    {
      "blogId": "3",
      "lastModified": "2019-09-15T07:13:34.123Z",
      "created": "2019-09-15T07:13:34.123Z",
      "tags": [],
      "author": "Mohit Kataria",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is the third blog description",
      "title": "This is the third blog"
    }

  ]
  
  public currentBlog;

  
  constructor() {
    console.log("service constructor is called")
   }




  public getAllBlogs():any {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId):any{

    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }

}
