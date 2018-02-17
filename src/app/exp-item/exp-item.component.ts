import {Component, Input, OnInit} from '@angular/core';
import {ExpressionItem} from '../expression-item.model';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})
export class ExpItemComponent implements OnInit {
  @Input() expression: ExpressionItem = new ExpressionItem();

  constructor() { }

  ngOnInit() {
  }

}
