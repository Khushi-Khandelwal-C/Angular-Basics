import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { CommonModule } from '@angular/common';
import { SecondPart } from './second-part/second-part';
import { Third } from './third/third';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Third],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  protected readonly title = signal('first-project');
  public name = "From app component"
  fn(data : string){
    console.log(data)
  }
}
