import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThirdService } from '../third-service';

@Component({
  selector: 'app-third',
  imports: [CommonModule],
  templateUrl: './third.html',
  styleUrl: './third.css',
})
export class Third {
  public employee :any;
  // constructor(private thirdService : ThirdService) {
  //    this.thirdService.getEmployees()
  //   .subscribe(data => this.employee = data);
  // }
  

}
