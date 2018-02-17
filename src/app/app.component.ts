import { Component, OnInit } from '@angular/core';
import { TagsService } from './tags.service';
// import {ExpressionsService} from './expressions.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tagList: string[];

  constructor( private tagsService: TagsService) { }

  ngOnInit() {
    // this.expressionItems = this.expressionsService.getExpressions();
    this.tagList = this.tagsService.getTags();
  }
}
