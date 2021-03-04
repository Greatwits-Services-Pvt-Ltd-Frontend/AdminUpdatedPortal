import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { ListPromotionComponent } from './list-promotion/list-promotion.component';
import { UpdatePromotionComponent } from './update-promotion/update-promotion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddPromotionComponent,
    ListPromotionComponent,
    UpdatePromotionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    AddPromotionComponent,
    ListPromotionComponent,
    UpdatePromotionComponent
  ]
})
export class PromotionModule { }
