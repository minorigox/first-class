import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  imports: [],
  standalone: true,
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  @Input() description = '';
  @Input() url = '';
}