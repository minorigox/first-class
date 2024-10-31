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
  url = 'https://i.pinimg.com/564x/4b/0a/1f/4b0a1f1cfbba523a8e6c6ee8341a6520.jpg';
}
