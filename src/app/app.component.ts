import { Component } from '@angular/core';
import { PhotoComponent } from './photos/photo/photo.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photos/photo/photo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PhotoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'first-class';
  photos: Photo[] = [];
  constructor(http: HttpClient) {
    http
      .get<Photo[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        photos => this.photos = photos,
        err => console.log(err));
  }
}
