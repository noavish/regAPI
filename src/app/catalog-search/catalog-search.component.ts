import {Component, Input, OnInit} from '@angular/core';
import {ExpressionItem} from '../expression-item.model';

@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.css']
})
export class CatalogSearchComponent implements OnInit {
  @Input() tagList: string[];

  constructor() { }

  ngOnInit() {
  }

}
