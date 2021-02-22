import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-local-service/data.service';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';

@Component({
  selector: 'app-show-list-category',
  templateUrl: './show-list-category.component.html',
  styleUrls: ['./show-list-category.component.css']
})
export class ShowListCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<any[]>();
  list:any = [];
  checkData: boolean = false;
  constructor(private localStorage: LocalStorageService, private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.list = this.localStorage.get('1');
    this.dataSource.data = this.list;
  }

  deleteCategory(i){
    this.list.splice(i,1);
    this.localStorage.set('1',this.list);
    this.dataSource.data = this.localStorage.get('1');
  }

  editCategory(i){
    this.data.updateID(i);
    this.data.checkData = true;
    this.router.navigateByUrl("/categories/create");
  }
}
