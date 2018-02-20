import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {ExpressionItem} from '../expression-item.model';
import {ExpressionsService} from '../expressions.service';

@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.css']
})
export class CatalogSearchComponent implements OnInit {
  @Input() tagList: string[];
  searchTerm: string = '';
  searchTags: Set<string> = new Set();

  constructor( private expressionsService: ExpressionsService ) { }

  ngOnInit() {
  }

  searchByTitle() {
    this.expressionsService.searchingByInput.emit({searchTerm: this.searchTerm, searchTags: this.searchTags});
  }

  searchByTag(tag) {
    if (!this.searchTags.has(tag)) {
      this.searchTags.add(tag);
    } else {
      this.searchTags.delete(tag);
    }
    console.log(this.searchTags)
    this.expressionsService.searchingByTags.emit({searchTerm: this.searchTerm, searchTags: this.searchTags});
  }
}
