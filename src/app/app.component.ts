import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todoApp';
  user = 'Kaan';
  items = [
    { description: 'Buy groceries for Breakfast', action: 'no' },
    { description: 'Buy cinema tickets', action: 'no' },
    { description: 'Go to the gym', action: 'no' },
    { description: 'write a invoice', action: 'no' },
  ];
}
