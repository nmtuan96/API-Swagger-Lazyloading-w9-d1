import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';

@Component({
  selector: 'app-dropdown-category',
  templateUrl: './dropdown-category.component.html',
  styleUrls: ['./dropdown-category.component.css']
})
export class DropdownCategoryComponent implements OnInit {
  listCategory: any =[];
  categories: any;
  indexCategory:any;
  constructor(private localStorage: LocalStorageService,) { }
  @Output() sendCategory = new EventEmitter();
  isValidatedCategory = false;
  ngOnInit(): void {
    this.listCategory = this.localStorage.get('1');
  }

  changeCategory(evt){
    this.categories = this.listCategory[evt];
    if(this.categories){
      this.isValidatedCategory = false;
    }
    this.sendCategory.emit(this.categories);
  }
  checkValidation(){
    if(!this.categories){
      this.isValidatedCategory = true;
    }else{
      this.isValidatedCategory = false;
    }
  }
}
