import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatalogSearchComponent } from './catalog-search/catalog-search.component';
import { ExpItemComponent } from './exp-item/exp-item.component';
import { ExpCatalogComponent } from './exp-catalog/exp-catalog.component';
import {ExpressionsService} from './expressions.service';


@NgModule({
  declarations: [
    AppComponent,
    CatalogSearchComponent,
    ExpItemComponent,
    ExpCatalogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ExpressionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
