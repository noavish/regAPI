import { Injectable } from '@angular/core';

const Tags: string[] = ['finance',
  'sensitive', 'input-validation', 'personal-details'];

@Injectable()
export class TagsService {
  tags: string[] = Tags;

  constructor() { }

  getTags() {
    return Tags;
  }
}
