import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data-local-service/data.service';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';

@Component({
  selector: 'app-show-list-tag',
  templateUrl: './show-list-tag.component.html',
  styleUrls: ['./show-list-tag.component.css']
})
export class ShowListTagComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<any[]>();
  list:any = [];
  checkData: boolean = false;
  constructor(private localStorage: LocalStorageService, private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.list = this.localStorage.get('2');
    this.dataSource.data = this.list;
  }

  deleteTag(i){
    this.list.splice(i,1);
    this.localStorage.set('2',this.list);
    this.dataSource.data = this.localStorage.get('2');
  }

  editTag(i){
    this.data.updateID(i);
    this.data.checkData = true;
    this.router.navigateByUrl("/tags/create");
  }
}
