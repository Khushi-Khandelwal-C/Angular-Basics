import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  template: `<div> Hello world {{name}} {{2+6}}</div>
  <div>{{name.length}}</div>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greet()}}</h2>
  
  <h1>Property Binding</h1>
  <input type = "text" [value] = "name">

  <input type = "text" value = "{{name}}">

  <h1>Style Binding</h1>

  <h2 [style.color] = "hasError? 'Orange':'Red'">Error yet? </h2>

  <h2 [style.color] = "highlighted"> What up, style binding </h2>
  <h2 [ngStyle] = "styles">using NgStyle can be done by importing commonModules </h2>

  `, //this 2 curly brackets are used for interpolation
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
  public name = "Queen"; //variables which we can inject in html,in interpolation we can also perform operations,string concatenation
}
