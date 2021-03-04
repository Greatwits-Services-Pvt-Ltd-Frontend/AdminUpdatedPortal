import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegiComponent } from './regi/regi.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'
import { CategoryModule } from './category/category.module';
import { RouterModule } from '@angular/router';
import { SubCategoryModule } from './subCategory/sub-category.module';
import { SubsubcategoryModule } from './subsubcategory/subsubcategory.module';
import { PromotionModule } from './promotion/promotion.module';
import { ProductModule } from './product/product.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    CategoryModule,
    RouterModule,
    SubCategoryModule,
    SubsubcategoryModule,
    PromotionModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
