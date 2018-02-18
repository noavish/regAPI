import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatalogSearchComponent } from './catalog-search/catalog-search.component';
import { ExpItemComponent } from './exp-item/exp-item.component';
import { ExpCatalogComponent } from './exp-catalog/exp-catalog.component';
import {ExpressionsService} from './expressions.service';
import { ExpressionDetailsComponent } from './expression-details/expression-details.component';
import {TagsService} from './tags.service';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CatalogSearchComponent,
    ExpItemComponent,
    ExpCatalogComponent,
    ExpressionDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ExpressionsService, TagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
