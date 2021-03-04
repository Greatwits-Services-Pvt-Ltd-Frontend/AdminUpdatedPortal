import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubsubcategoryComponent } from './add-subsubcategory/add-subsubcategory.component';
import { ListSubsubcategoryComponent } from './list-subsubcategory/list-subsubcategory.component';
import { UpdateSubsubcategoryComponent } from './update-subsubcategory/update-subsubcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddSubsubcategoryComponent,
    ListSubsubcategoryComponent,
    UpdateSubsubcategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    AddSubsubcategoryComponent,
    ListSubsubcategoryComponent,
    UpdateSubsubcategoryComponent
  ]
})
export class SubsubcategoryModule { }
