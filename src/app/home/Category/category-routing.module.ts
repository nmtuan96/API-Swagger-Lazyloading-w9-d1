import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAndUpdateCategoryComponent } from './create-and-update-category/create-and-update-category.component';
import { ShowListCategoryComponent } from './show-list-category/show-list-category.component';

const routes: Routes = [
  { path: '', component: ShowListCategoryComponent },
  { path: 'create', component: CreateAndUpdateCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
