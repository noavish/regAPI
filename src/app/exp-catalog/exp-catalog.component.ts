import { Component, OnInit } from '@angular/core';
import { ExpressionsService } from '../expressions.service';
import { ExpressionItem } from '../expression-item.model';


@Component({
  selector: 'app-exp-catalog',
  templateUrl: './exp-catalog.component.html',
  styleUrls: ['./exp-catalog.component.css']
})

export class ExpCatalogComponent implements OnInit {
  expressionItems: ExpressionItem[];

  constructor(private expressionsService: ExpressionsService) {
  }

  ngOnInit() {
    this.expressionItems = this.expressionsService.getExpressions();
    this.expressionsService.searchingByInput.subscribe((searchValues) => {
      this.expressionItems = this.expressionsService.filterExpressions(searchValues.searchTerm, searchValues.searchTags);
    });
    this.expressionsService.searchingByTags.subscribe((searchValues) => {
      this.expressionItems = this.expressionsService.filterExpressions(searchValues.searchTerm, searchValues.searchTags);
    });
  }
}
