import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Third } from '../third';

@Component({
  selector: 'app-third',
  imports: [CommonModule],
  templateUrl: './third.html',
  styleUrl: './third.css',
})
export class Third {
  
  public employee = [
    {"id" : 1, "name" : "Khushi" , age : 90},
    {"id" : 2, "name" : "Riya" , age :67},
    {"id" : 3,"name" : "Sia" , age : 23},
    {"id" : 4, "name" : "Ridha" , age : 56}
  ]
}
