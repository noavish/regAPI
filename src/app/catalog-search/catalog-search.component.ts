import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {ExpressionItem} from '../expression-item.model';
import {ExpressionsService} from '../expressions.service';

@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.css']
})
export class CatalogSearchComponent implements OnInit {
  // @Output() searchInputChanged: EventEmitter<string> = new EventEmitter();
  @Input() tagList: string[];
  searchTerm: string = '';

  constructor( private expressionsService: ExpressionsService ) { }

  ngOnInit() {
  }

  searchByTitle() {
    console.log(this.expressionsService.filterExpressions(this.searchTerm));
    // this.searchInputChanged.emit(this.searchTerm);
  }
}
