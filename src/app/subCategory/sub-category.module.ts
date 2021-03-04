import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { ListSubcategoryComponent } from './list-subcategory/list-subcategory.component';
import { UpdateSubCategoryComponent } from './update-sub-category/update-sub-category.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
    AddSubcategoryComponent,
    ListSubcategoryComponent,
    UpdateSubCategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    
    AddSubcategoryComponent,
    ListSubcategoryComponent,
    UpdateSubCategoryComponent,
  ]
})
export class SubCategoryModule { }
