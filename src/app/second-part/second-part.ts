import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-second-part',
  imports: [CommonModule],
  templateUrl: './second-part.html',
  styleUrl: './second-part.css',
})
export class SecondPart {
  public isLoggedIn = false;
  public color = "white";
  public fruits = ["apple","orange","pineapple","banana"];
  @Input('parentData') public rootName : any ; 

  @Output() msg = new EventEmitter <string>();

  eventLauncher(){
    this.msg.emit ("Hello this msg is from child to parent");
  }
  public anotherStr = "Idk What TO give This one";
  public str2 = "this is gonna be uppercase using pipes"
  public str3 = "this is gonna slice the string";
   person = {
    firstName : 'Khushi',
     lastName : 'Khandelwal'
  };

  public date = new Date();
}
