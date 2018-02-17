import {Component, Input, OnInit} from '@angular/core';
import {ExpressionItem} from '../expression-item.model';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})
export class ExpItemComponent implements OnInit {
  @Input() expression: ExpressionItem = new ExpressionItem();
  validClicked: boolean;
  invalidClicked: boolean;
  detailsOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  isValidClicked() {
    this.validClicked = !this.validClicked;
  }

  isInvalidClicked() {
    this.invalidClicked = !this.invalidClicked;
  }

  openDetails() {
    this.detailsOpen = !this.detailsOpen;
  }
}
