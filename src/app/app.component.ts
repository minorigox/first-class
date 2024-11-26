import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoComponent } from './photos/photo/photo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-class';
  photos = [
    {      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTm8ZtFAliBMdrbKpVcRlOx7YPSKGCEakIQ&s',
      description: 'Todo Poderoso'
    },
    {      
url: 'https://res.cloudinary.com/idemo/image/fetch/c_fill,f_webp,q_auto:good/https://www.jornaldorap.com.br/wp-content/uploads/2024/09/depay.jpg',
      description: 'Memphis'
    }  
   ];
}
