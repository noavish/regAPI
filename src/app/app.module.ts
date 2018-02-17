import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatalogSearchComponent } from './catalog-search/catalog-search.component';
import { ExpItemComponent } from './exp-item/exp-item.component';
import { ExpCatalogComponent } from './exp-catalog/exp-catalog.component';
import {ExpressionsService} from './expressions.service';
import { ExpressionDetailsComponent } from './expression-details/expression-details.component';
import {TagsService} from './tags.service';


@NgModule({
  declarations: [
    AppComponent,
    CatalogSearchComponent,
    ExpItemComponent,
    ExpCatalogComponent,
    ExpressionDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ExpressionsService, TagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
