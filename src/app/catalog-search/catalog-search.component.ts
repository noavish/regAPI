import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {ExpressionItem} from '../expression-item.model';

@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.css']
})
export class CatalogSearchComponent implements OnInit {
  @Output() searchInputChanged: EventEmitter<string> = new EventEmitter();
  @Input() tagList: string[];
  searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

  searchByTitle() {
    this.searchInputChanged.emit(this.searchTerm);
  }
}
