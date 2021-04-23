import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogs:any[]=[];

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.blogs= [
      { 'id':1, "author": "max"},
      { 'id':2, "author": "jack"},
      { 'id':3, "author": "john"},
      { 'id':4, "author": "don"},
      { 'id':5, "author": "ben"},
    ]
  }

  public onClick(blog: any):void{
          this.router.navigate(['/authors', blog.id,blog.author]); 
  }
 
}
