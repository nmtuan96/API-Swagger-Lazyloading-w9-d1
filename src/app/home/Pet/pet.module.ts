import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { ShowListPetComponent } from './show-list-pet/show-list-pet.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { DropdownCategoryComponent } from './dropdown/dropdown-category/dropdown-category.component';


@NgModule({
  declarations: [
    CreatePetComponent,
    ShowListPetComponent,
    UpdatePetComponent,
    DropdownCategoryComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    FormsModule,
  ]
})
export class PetModule { }
