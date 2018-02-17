import { Injectable } from '@angular/core';
import { ExpressionItem } from './expression-item.model';

const Expressions: ExpressionItem[] = [
  {
    'id': '507f191e810c19729de860ea',
    'title': 'Email Address',
    'description': 'Find e-mail addresses in your text',
    'tags': [
      'input-validation',
      'personal-details'
    ],
    'rating': 3,
    'validExamples': [
      'validemail@mail.com',
      'just.e-mail@myapp.mails.com'
    ],
    'invalidExamples': [
      'invalidmail.com',
      'no mail here@mails.com'
    ]
  },
  {
    'id': '518f291e810c19729de92d12',
    'title': 'Social Security Number',
    'description': 'Find SSN occurrences in your text',
    'tags': [
      'sensitive',
      'personal-details'
    ],
    'rating': 4,
    'validExamples': [
      '123-45-6789',
      '301 54 5290'
    ],
    'invalidExamples': [
      '000-45-6789',
      '2222-22-1'
    ]
  },
  {
    'id': '532f291e810c19729de87e93',
    'title': 'Visa credit card number',
    'description': 'Identify Visa card numbers',
    'tags': [
      'finance',
      'sensitive',
      'personal-details'
    ],
    'rating': 5,
    'validExamples': [
      '4532337409287294',
      '4532 3374 0928 7294'
    ],
    'invalidExamples': [
      '123456',
      '45323374234'
    ]
  }
];


@Injectable()
export class ExpressionsService {
  ExpressionItems: ExpressionItem[] = Expressions;

  constructor() { }

  getExpressions() {
    return Expressions;
  }
}
