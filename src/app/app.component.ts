import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-class';
  description = 'Todo Poderoso';
  url = 'https://i.pinimg.com/564x/4b/0a/1f/4b0a1f1cfbba523a8e6c6ee8341a6520.jpg';

}
