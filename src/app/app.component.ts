import { Component, VERSION } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
