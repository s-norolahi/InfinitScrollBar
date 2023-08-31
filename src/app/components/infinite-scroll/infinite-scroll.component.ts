import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'I-Scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit
{
  showLoading: boolean = false;
  offset: number = 100;// for free space at bottom of screen
  postMinHeight = 100; // minimom height of post
  pageNumber: number = -1;
  pageSize: number = Math.round(window.innerHeight / this.postMinHeight); // limitation for retrive from api related on device 
  postList: Post[] | any[] = [];
  constructor(public postService: PostService) { }

  ngOnInit(): void
  {
    this.retriveData();
  }

  onDivScroll(e: any)
  {
    const divViewHeight = e.target.offsetHeight // viewport:height of div
    const divScrollHeight = e.target.scrollHeight // height of div with scroll
    const scrollLocation = e.target.scrollTop; // how far user scrolled        
    if (divScrollHeight - scrollLocation == divViewHeight)
      this.retriveData();
  }
  //#region  calculated methods
  get deviceHeight()
  {
    return window.innerHeight - this.offset;
  }
  //#endregion
  //#region  private methods
  private retriveData()
  {
    this.showLoading = true;
    this.pageNumber++;
    this.postService
      .getPosts(this.pageNumber, this.pageSize)
      .subscribe(result => { this.postList.push(...result); this.showLoading = false });
  }
  //#endregion
}
