import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCatalogComponent } from './exp-catalog.component';

describe('ExpCatalogComponent', () => {
  let component: ExpCatalogComponent;
  let fixture: ComponentFixture<ExpCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
