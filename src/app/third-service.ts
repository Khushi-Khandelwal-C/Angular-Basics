import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThirdService {
  constructor (private http : HttpClient){}
  getData(){
    return [
    {"id" : 1, "name" : "Khushi" , age : 90},
    {"id" : 2, "name" : "Riya" , age :67},
    {"id" : 3,"name" : "Sia" , age : 23},
    {"id" : 4, "name" : "Ridha" , age : 56}
  ];
  }
  // getEmployees() : Observable<IEmployee[]>{
  //   return this.http.get<IEmployee>(---).pipe(
  //     catchError( err => {
  //       console.log(err);
  //       throw err;
  //     })
  //   )
    
  // }
}
