import {Component, Input, OnInit} from '@angular/core';
import {ExpressionItem} from '../expression-item.model';

@Component({
  selector: 'app-expression-details',
  templateUrl: './expression-details.component.html',
  styleUrls: ['./expression-details.component.css']
})
export class ExpressionDetailsComponent implements OnInit {
  @Input() detailsOpen: boolean;
  @Input() expressionId: string;

  constructor() { }

  ngOnInit() {
  }

}
