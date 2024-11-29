import { Component } from '@angular/core';
import { PhotoComponent } from './photos/photo/photo.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';

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
  constructor(photoService: PhotoService) {
    photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }
}
