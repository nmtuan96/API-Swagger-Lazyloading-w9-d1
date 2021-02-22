import { Component, OnInit } from '@angular/core';
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
  
  constructor(private service: PetService, private router: Router) { }

  ngOnInit(): void {
  }
  availablePet(){
    this.service.getDataPetAvailable()
      .then( res => { this.list = res;
                      this.dataSource.data = this.list; })
      .catch( e => { window.alert('Connection Error!')})
  }
  pendingPet(){
    this.service.getDataPetPending()
      .then( res => { this.list = res;
                      this.dataSource.data = this.list; })
      .catch( e => { window.alert('Connection Error!')})
  }
  soldPet(){
    this.service.getDataPetSold()
      .then( res => { this.list = res;
                      this.dataSource.data = this.list; })
      .catch( e => { window.alert('Connection Error!')})
  }

  deletePet(e){
    this.service.detailPet(e)
      .then( res => {
        this.checkPetDelete = res; 
        this.service.deletePet(e);
        if(this.checkPetDelete.status == "available"){
          this.availablePet();
          window.location.reload();
        }
        if(this.checkPetDelete.status == "pending"){
          this.pendingPet();
          window.location.reload();
        }
        if(this.checkPetDelete.status == "sold"){
          this.soldPet();
          window.location.reload();
        }
      })
      .catch( e => { window.alert('Connection Error!')});
    
  }
  

  editPet(e){
    this.router.navigateByUrl("pets/update/"+e);
  }
}
