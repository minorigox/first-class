import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  description = 'Todo Poderoso';
  url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTm8ZtFAliBMdrbKpVcRlOx7YPSKGCEakIQ&s';
}
