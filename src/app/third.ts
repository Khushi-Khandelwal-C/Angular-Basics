import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Third {
  getData(){
    return [
    {"id" : 1, "name" : "Khushi" , age : 90},
    {"id" : 2, "name" : "Riya" , age :67},
    {"id" : 3,"name" : "Sia" , age : 23},
    {"id" : 4, "name" : "Ridha" , age : 56}
  ];
  }
  
}
