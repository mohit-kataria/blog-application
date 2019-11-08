import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
 
import { Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BlogHttpService {

public allBlogs;
public currentBlog;
public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
public authToken ='MTVmYmRhNjk4OTM0YzNmMGRjMTg2NDViYzIxMjdjMmE1M2NkMzg2MWNhNGM1N2E2N2Y5NDg1MjgwM2ExNmI4ZDczZjY2N2MzMTZkMDEzN2M0ZWFjYmJiZDA4ZTAxNjkzMzkzNDEwOTk5ODg3ODE4ZGZiNzEyN2YyN2MxNmVkNjkyZQ=='

  constructor(private _http:HttpClient){
    console.log("blog-http service was called");
  }
  private handleError(err:HttpErrorResponse) {
    console.log("handle error Http calls")
    console.log(err.message)
    return Observable.throw(err.message)
  }



   getAllBlogs(): any {
     let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authToken);
     console.log(myResponse);
     return myResponse;
     }

   public getSingleBlogInformation(currentBlogId):any{
     let myResponse = this._http.get(this.baseUrl+'/view'+'/'+ currentBlogId +'?authToken='+this.authToken)
     return myResponse;
  
   }

   public createBlog(blogData):any {
     let myResponse = this._http.post(this.baseUrl + '/create?authToken=' + this.authToken, blogData)
     return myResponse;
   }

   public deleteBlog(blogId):any {
    let data={}
    let myResponse = this._http.post(this.baseUrl+ '/' + blogId +'/delete?authToken=' + this.authToken, blogId)
    return myResponse;
  }

   public editBlog(blogId, blogData):any {
    let myResponse = this._http.put(this.baseUrl+ '/' + blogId +'/edit?authToken=' + this.authToken, blogData)
    return myResponse;
  }
}
