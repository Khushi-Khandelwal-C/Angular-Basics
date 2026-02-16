import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Test,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-project');
}
