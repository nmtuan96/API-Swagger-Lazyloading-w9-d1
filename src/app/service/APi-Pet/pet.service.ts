import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  constructor(public httpClient: HttpClient) { }


  addPet = (pets): Promise<Object> => {
      return new Promise((resolve, reject) => {
          let url = "https://petstore.swagger.io/v2/pet";
          this.httpClient.post(url,pets)
              .subscribe(res => {
                  resolve(res);
              }, err => {
                  reject(err);
              })
      })
  }


  
  updatePet = (pets): Promise<Object> => {
      return new Promise((resolve, reject) => {
          let url = "https://petstore.swagger.io/v2/pet";
          this.httpClient.put(url,pets)
              .subscribe(res => {
                  resolve(res);
              }, err => {
                  reject(err);
              })
      })
  }
  detailPet = (id): Promise<Object> => {
      return new Promise((resolve, reject) => {
          let url = "https://petstore.swagger.io/v2/pet/"+id;
          this.httpClient.get(url)
              .subscribe(res => {
                  resolve(res);
              }, err => {
                  reject(err);
              })
      })
  }
  deletePet = (id): Promise<Object> => {
      return new Promise((resolve, reject) => {
          let url = "https://petstore.swagger.io/v2/pet/"+id;
          this.httpClient.delete(url,id)
              .subscribe(res => {
                  resolve(res);
              }, err => {
                  reject(err);
              })
      })
  }
  
  getDataPetAvailable = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
        let url = "https://petstore.swagger.io/v2/pet/findByStatus?status=available";
        this.httpClient.get(url)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
  }

  getDataPetPending = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
        let url = "https://petstore.swagger.io/v2/pet/findByStatus?status=pending";
        this.httpClient.get(url)
            .subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
    })
 }

 getDataPetSold = (): Promise<Object> => {
  return new Promise((resolve, reject) => {
      let url = "https://petstore.swagger.io/v2/pet/findByStatus?status=sold";
      this.httpClient.get(url)
          .subscribe(res => {
              resolve(res);
          }, err => {
              reject(err);
          })
  })
}
}