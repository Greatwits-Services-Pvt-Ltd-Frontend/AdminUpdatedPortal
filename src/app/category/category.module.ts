import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCatComponent } from './add-cat/add-cat.component';
import { ListCatComponent } from "./list-cat/list-cat.component";
import { UpdateCatComponent } from "./update-cat/update-cat.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddCatComponent,
    ListCatComponent,
    UpdateCatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[
    AddCatComponent,
    ListCatComponent,
    UpdateCatComponent
  ]
})
export class CategoryModule { }
