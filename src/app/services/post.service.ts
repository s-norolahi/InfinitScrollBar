import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Post } from 'src/app/models/Post';
@Injectable({
  providedIn: 'root'
})
export class PostService
{

  allPposts: Post[] | any[] = [];
  fakeDelay: number = 800;
  constructor(private http: HttpClient) { }

  private getPostsFromApi(page: number): Observable<Post[]>
  {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`) as Observable<Post[]>;
  }
  getPosts(pageNumber: number = 0, pageSize: number = 10): Observable<Post[]>
  {
    let start: number = pageNumber * pageSize;
    let end: number = start + pageSize
    var subject = new Subject<Post[]>();
    if (this.allPposts.length > 0)
      return (new Observable(observer => { setTimeout(() => { observer.next(this.getPostsLimit(start, end)); observer.complete(); }, this.fakeDelay); }));
    else
    {
      this.getPostsFromApi(1).subscribe(result =>
      {
        this.allPposts = result;
        subject.next(this.getPostsLimit(start, end));
      })
      return subject.asObservable().pipe(delay(this.fakeDelay));;
    }

  }
  private getPostsLimit(start: number, end: number)
  {
    return (start < this.allPposts.length) ? this.allPposts.filter((item, index) => { return index >= start && index < end }) : [];
  }
}
