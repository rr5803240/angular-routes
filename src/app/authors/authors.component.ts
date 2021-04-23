import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  public authorDetails :any = {}


  constructor(private activatedRoute: ActivatedRoute) { }

  public ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe((params )=>{
        this.authorDetails.id= params.get('id');
        this.authorDetails.author= params.get('author');
    });
  }

}
