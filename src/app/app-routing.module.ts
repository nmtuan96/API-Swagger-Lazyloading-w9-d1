import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "pets", loadChildren:()=>import('./home/Pet/pet.module').then(m=> m.PetModule),},
  { path: "categories", loadChildren:()=>import('./home/Category/category.module').then(m=> m.CategoryModule)},
  { path: "tags", loadChildren:()=> import('./home/Tag/tag.module').then(m=> m.TagModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
