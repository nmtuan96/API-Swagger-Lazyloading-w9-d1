import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetService } from 'src/app/service/APi-Pet/pet.service';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  pet: any = this.fb.group({
    id: new FormControl(''),
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    category: {
      id: new FormControl('', [Validators.required]),
    },
    tags: new FormControl(''),
    status: new FormControl('', [Validators.required]),
    photoUrls: new FormControl(''),
  });
  listCategory: any =[];
  listTag: any = [];
  listCheckTag: any = [];
  booleanTag : Boolean= false;
  checkCategory: any;
  
  listPhotoUrls: any = [];
  constructor(private fb: FormBuilder, private router: Router, private localStorage: LocalStorageService, private petService: PetService) { }

  ngOnInit(): void {
    this.listCategory = this.localStorage.get('1');
    this.listTag = this.localStorage.get('2');
  }
  addPet(){
    this.checkCategory= this.pet.value.category;
    this.listPhotoUrls.push(this.pet.value.photoUrls);
    this.pet.value.photoUrls=[];
    this.pet.controls['tags'].setValue(this.listCheckTag);
    this.pet.controls['category'].setValue(this.listCategory[this.checkCategory]);
    this.pet.controls['id'].setValue(2323);
    this.pet.value.photoUrls = this.listPhotoUrls;
    
    this.listCheckTag = [];
    this.listPhotoUrls= [];
    this.petService.addPet(this.pet.value)
      .then(res => {
        this.pet.reset();
        this.router.navigateByUrl("/pets");
        })
      .catch(e => {
        this.pet.reset();
        window.alert('Connection Error!'); })
  }
  back(){
    this.pet.reset();
    this.router.navigateByUrl('/pets');
  }

  isValidateTag= false;
  changeSelection(i){
    for (let checktag of this.listCheckTag) {
      if(checktag == this.listTag[i]){
        this.booleanTag = true;
      }
    }
    if(this.booleanTag){
      this.listCheckTag.splice(i, 1);
      this.booleanTag = false;
    }else{
      this.listCheckTag.push(this.listTag[i]);
    }
    if(this.listCheckTag.length === 0){
      this.isValidateTag = true;
    }else{
      this.isValidateTag = false;
    }
  }

  isValidatedCategory = false;
  
  changeCategory(e){
    let numberCheckValidateCate = e.target.value;
    this.pet.controls['category'].setValue(e.target.value, {onlySelf: true});
    if(!numberCheckValidateCate){
      this.isValidatedCategory = true;
    }else{
      this.isValidatedCategory = false;
    }
    if(numberCheckValidateCate === 0){
      this.isValidatedCategory = false;
    }
  }
  isValidatedPet = false;
  changeStatus(e){
    this.pet.controls['status'].setValue(e.target.value, {onlySelf: true});
    if(!e.target.value){
      this.isValidatedPet = true;
    }else{
      this.isValidatedPet = false;
    }
  }
}
