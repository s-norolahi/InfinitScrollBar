import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
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
  offset: number = 80;// for free space at bottom of screen
  postMinHeight = 100; // minimom height of post
  pageNumber: number = -1;
  innerHeight: number = window.innerHeight;
  innerWidth: number = window.innerWidth;
  postList: Post[] | any[] = [];
  pageSize: number = Math.round(window.innerHeight / this.postMinHeight); // limitation for retrive from api related on device 


  @ViewChild("infinitDiv") infinitDiv: ElementRef;
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
    return innerHeight - this.offset;
  }
  get threshold(): number
  {
    return innerWidth / 10
  }
  get deviceType()
  {
    let deviceType: string = 'desktop';
    if (this.innerWidth >= 560 && innerWidth < 760) deviceType = 'tablet';
    if (innerWidth < 560) deviceType = 'mobile';
    return deviceType;
  }

  //#endregion
  //#region  private methods
  // for monitoring viewport
  @HostListener('window:resize', ['$event'])
  onResize()
  {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
  }
  private retriveData()
  {
    this.showLoading = true;
    this.pageNumber++;
    this.postService
      .getPosts(this.pageNumber, this.pageSize)
      .subscribe(result =>
      {
        this.postList.push(...result);
        this.showLoading = false;
        // let nativeDiv = this.infinitDiv.nativeElement;
        // setTimeout(() => { nativeDiv.scrollTo(null, nativeDiv.scrollTop + (this.pageNumber > 0 ? 50 : 0)); }, 0);
        this.goNextPageAuto();
      });
  }

  showDetail(event: any, postId: number)
  {
    event.target.remove();
    this.postList.find(x => x.id == postId).showMoreClicked = true;
    console.log(this.postList, 'post list');
    //
  }
  private goNextPageAuto()
  {
    // retrive new data after 8 second if doesnt scroll
    let nativeDiv = this.infinitDiv.nativeElement;
    console.log(nativeDiv, 'native div');
    let scrollOldPosition: number = nativeDiv.scrollTop;
    setTimeout(() =>
    {
      if (scrollOldPosition == nativeDiv.scrollTop)
      {
        this.postList = [];
        this.retriveData();
      }
    }, 8000);
  }
  //#endregion
}
