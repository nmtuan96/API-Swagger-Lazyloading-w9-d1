import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAndUpdateTagComponent } from './create-and-update-tag/create-and-update-tag.component';
import { ShowListTagComponent } from './show-list-tag/show-list-tag.component';

const routes: Routes = [
  { path: '', component: ShowListTagComponent },
  { path: 'create', component: CreateAndUpdateTagComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule { }
