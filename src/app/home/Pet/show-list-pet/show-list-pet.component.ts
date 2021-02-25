import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PetService } from 'src/app/service/APi-Pet/pet.service';

@Component({
  selector: 'app-show-list-pet',
  templateUrl: './show-list-pet.component.html',
  styleUrls: ['./show-list-pet.component.css']
})
export class ShowListPetComponent implements OnInit {
  displayedColumns: string[] = ['image', 'name', 'categories-name', 'tags-name', 'status' ,'action'];
  dataSource = new MatTableDataSource<any[]>();
  list: any = [];
  checkPetDelete: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service: PetService, private router: Router) { }

  ngOnInit(): void {
  }
  availablePet(){
    this.service.getDataPetAvailable()
      .then( res => { this.list = res;
                      this.dataSource.data = this.list;
                      this.dataSource.paginator = this.paginator;})
      .catch( e => { window.alert('Connection Error!')});
  }
  pendingPet(){
    this.service.getDataPetPending()
      .then( res => { this.list = res;
                      this.dataSource.data = this.list;
                      this.dataSource.paginator = this.paginator; })
      .catch( e => { window.alert('Connection Error!')});
  }
  soldPet(){
    this.service.getDataPetSold()
      .then( res => { this.list = res;
                      this.dataSource.data = this.list;
                      this.dataSource.paginator = this.paginator; })
      .catch( e => { window.alert('Connection Error!')});
  }

  deletePet(e){
    this.service.deletePet(e)
    .then(res => {
      console.log("success");
      window.location.reload();
    })
    .catch( e => { window.alert('Connection Error!')});
    
  }
  

  editPet(e){
    this.router.navigateByUrl("pets/update/"+e);
  }
}
