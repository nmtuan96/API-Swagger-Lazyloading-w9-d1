import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { ShowListPetComponent } from './show-list-pet/show-list-pet.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';

const routes: Routes = [
  { path: '', component: ShowListPetComponent },
  { path: 'create', component: CreatePetComponent },
  { path: 'update/:id', component: UpdatePetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
