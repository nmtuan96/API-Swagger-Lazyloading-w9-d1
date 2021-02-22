import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-local-service/data.service';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';

@Component({
  selector: 'app-create-and-update-category',
  templateUrl: './create-and-update-category.component.html',
  styleUrls: ['./create-and-update-category.component.css']
})
export class CreateAndUpdateCategoryComponent implements OnInit {
  category: any = this.fb.group({
    id: new FormControl(''),
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  });

  CheckUpdate: boolean = false;
  CheckCreate: boolean = false;
  list: any = [];
  idUpdateCategory: any;
  booleanCheckUpdate: boolean = false;
  valueCategory: any;
  constructor(private fb: FormBuilder, private localStorage: LocalStorageService, private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.list = this.localStorage.get('1');
    if(this.data.checkData){
      this.data.shareID.subscribe( x => {
        this.idUpdateCategory= x;
        this.booleanCheckUpdate= true;
        this.valueCategory= this.list[x];
        this.category.controls['id'].setValue(this.valueCategory.id);
        this.category.controls['name'].setValue(this.valueCategory.name);
      });
      this.data.checkData=false;
    }
    if(this.valueCategory){
      this.CheckUpdate = true;
    }else{
      this.CheckCreate= true;
    }
  }
  addCategory(){
    if(!this.category.value.id){
      this.category.value.id = this.list.length +1;
      this.list.push(this.category.value);
      this.localStorage.set('1', this.list);
    }
      this.category.reset();
      this.CheckCreate = false;
      this.router.navigateByUrl('/categories');
  }

  updateCustomer(){
    if(this.booleanCheckUpdate){
      for (let i in this.list) {
        if(this.idUpdateCategory == i){
          this.list[i] = this.category.value
        }
      }
      this.localStorage.set('1',this.list);
      this.category.reset();
      this.idUpdateCategory = false;
      this.CheckUpdate = false;
      this.router.navigateByUrl('/categories');
    }
  }

  back(){
    this.category.reset();
    this.router.navigateByUrl('/categories');
  }
}
