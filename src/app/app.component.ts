import { Component } from '@angular/core';
import { PhotoComponent } from './photos/photo/photo.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PhotoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-class';
  photos: Object[] = [];
  constructor(http: HttpClient) {
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe((photos) => (this.photos = photos));
  }
}
