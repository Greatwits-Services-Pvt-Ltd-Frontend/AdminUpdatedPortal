import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCatComponent} from './category/add-cat/add-cat.component';
import {ListCatComponent} from '../app/category/list-cat/list-cat.component';
import {LoginComponent} from './login/login.component';
import {UpdateCatComponent} from './category/update-cat/update-cat.component';
import {RegiComponent} from './regi/regi.component'
import { AddSubcategoryComponent } from './subCategory/add-subcategory/add-subcategory.component';
import { ListSubcategoryComponent } from './subCategory/list-subcategory/list-subcategory.component';
import { UpdateSubCategoryComponent } from './subCategory/update-sub-category/update-sub-category.component';
import { AddSubsubcategoryComponent } from './subsubcategory/add-subsubcategory/add-subsubcategory.component';
import { ListSubsubcategoryComponent } from './subsubcategory/list-subsubcategory/list-subsubcategory.component';
import { UpdateSubsubcategoryComponent } from './subsubcategory/update-subsubcategory/update-subsubcategory.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { AddPromotionComponent } from './promotion/add-promotion/add-promotion.component';
import { ListPromotionComponent } from './promotion/list-promotion/list-promotion.component';
import { UpdatePromotionComponent } from './promotion/update-promotion/update-promotion.component';


const routes: Routes = [
{
  path:'',redirectTo:'list',pathMatch:'full'
},  
{
  component:AddCatComponent,
  path:'addCategory'
},
{
  component:ListCatComponent,
  path:'listCategory'
},
{
  component:LoginComponent,
  path:'login'
},
{
  component:UpdateCatComponent,
  path:'update/:id'
},
{
  component:RegiComponent,
  path:'regi'
},
{
  component:AddSubcategoryComponent,
  path:'addsubcategory'
},
{
  component:ListSubcategoryComponent,
  path:'listsubcategory'
},
{
  component:UpdateSubCategoryComponent,
  path:'updatesubcategory/:id'
},
{
  component:AddSubsubcategoryComponent,
  path:'addsub_subCategory'
},
{
  component:ListSubsubcategoryComponent,
  path:'listSubsubCategory'
},
{
  component:UpdateSubsubcategoryComponent,
  path:'updatesubsubCtegory/:id'
},
{
  component:AddProductComponent,
  path:'addProduct'
},
{
  component:ListproductComponent,
  path:'listproduct'
},
{
  component:UpdateproductComponent,
  path:'updateproduct/:id'
},
{
  component:AddPromotionComponent,
  path:'addpromotion'
},
{
  component:ListPromotionComponent,
  path:'listpromotion'
},
{
  component:UpdatePromotionComponent,
  path:'updatepromotion/:id'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
