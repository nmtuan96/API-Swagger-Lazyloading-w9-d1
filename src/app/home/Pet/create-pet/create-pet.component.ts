import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  statusValidation: 'available' | 'pending' | 'sold';
  listPhotoUrls: any = [];
  isValidateTag= false;

  dataCategory: "";
  constructor(private fb: FormBuilder, private router: Router, private localStorage: LocalStorageService, private petService: PetService) { }

  ngOnInit(): void {
    this.listCategory = this.localStorage.get('1');
    this.listTag = this.localStorage.get('2');
  }
  addPet(){
    this.listPhotoUrls.push(this.pet.value.photoUrls);
    this.pet.value.photoUrls=[];
    this.pet.controls['tags'].setValue(this.listCheckTag);
    this.pet.controls['category'].setValue(this.dataCategory);
    this.pet.controls['id'].setValue(2323);
    this.pet.value.photoUrls = this.listPhotoUrls;
    console.log(this.pet.value);
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
  
  


  getControl(key: string): AbstractControl {
    return this.pet.get(key);
  }

  receiveMessage(e){
    this.dataCategory = e;
  }
}
