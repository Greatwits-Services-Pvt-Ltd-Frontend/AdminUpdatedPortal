import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddProductComponent,
    ListproductComponent,
    UpdateproductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    AddProductComponent,
    ListproductComponent,
    UpdateproductComponent
  ]
})
export class ProductModule { }
