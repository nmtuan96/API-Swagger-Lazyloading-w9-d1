import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-local-service/data.service';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';

@Component({
  selector: 'app-create-and-update-tag',
  templateUrl: './create-and-update-tag.component.html',
  styleUrls: ['./create-and-update-tag.component.css']
})
export class CreateAndUpdateTagComponent implements OnInit {
  tags: any = this.fb.group({
    id: new FormControl(''),
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  });

  CheckUpdate: boolean = false;
  CheckCreate: boolean = false;
  list: any = [];
  idUpdateTag: any;
  booleanCheckUpdate: boolean = false;
  valueTag: any;
  constructor(private fb: FormBuilder, private localStorage: LocalStorageService, private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.list = this.localStorage.get('2');
    if(this.data.checkData){
      this.data.shareID.subscribe( x => {
        this.idUpdateTag = x;
        this.booleanCheckUpdate = true;
        this.valueTag= this.list[x];
        this.tags.controls['id'].setValue(this.valueTag.id);
        this.tags.controls['name'].setValue(this.valueTag.name);
      });
      this.data.checkData = false;
    }
    if(this.valueTag){
      this.CheckUpdate = true;
    }else{
      this.CheckCreate = true;
    }
  }

  addTag(){
    if(!this.tags.value.id){
      this.tags.value.id = this.list.length +1;
      this.list.push(this.tags.value);
      this.localStorage.set('2', this.list);
    }
      this.tags.reset();
      this.CheckCreate = false;
      this.router.navigateByUrl('/tags');
  }

  updateTag(){
    if(this.booleanCheckUpdate){
      for (let i in this.list) {
        if(this.idUpdateTag == i){
          this.list[i] = this.tags.value
        }
      }
      this.localStorage.set('2',this.list);
      this.tags.reset();
      this.idUpdateTag = false;
      this.CheckUpdate = false;
      this.router.navigateByUrl('/tags');
    }
  }

  back(){
    this.tags.reset();
    this.router.navigateByUrl('/tags');
  }
}
