import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [CommonModule,FormsModule],
  templateUrl: './test.html', //this 2 curly brackets are used for interpolation
  styleUrl: './test.css',
})
export class Test {
  greet() : string{
    return "Hello World";
  }
  public hasError = true;
  public highlighted = "Pink";
  public styles = {
    color : "Blue",
    fontStyle : "italic"
  }
  // OnClick(){
  //   console.log("Welcome");
  // }

  OnClick(event : any){
    console.log(event)
  }
  logMsg(msg : string){
    console.log(msg);
  }
  public name2 = ""
  public greeting = "previosly";
  public name = "Queen"; //variables which we can inject in html,in interpolation we can also perform operations,string concatenation
}
