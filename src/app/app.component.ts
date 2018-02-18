import { Component, OnInit } from '@angular/core';
import { TagsService } from './tags.service';
import { ExpressionsService } from './expressions.service';
import { ExpressionItem } from './expression-item.model';
// import {ExpressionsService} from './expressions.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  expressionItems: ExpressionItem[];
  tagList: string[];
  searchTerm: string;

  constructor( private expressionsService: ExpressionsService, private tagsService: TagsService) { }

  ngOnInit() {
    this.expressionItems = this.expressionsService.getExpressions();
    this.tagList = this.tagsService.getTags();
  }

  searchTitle(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
