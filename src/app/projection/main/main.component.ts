import { Component, OnInit } from '@angular/core';
import { MultipleComponent } from '../multiple/multiple.component';
import { SimpleComponent } from '../simple/simple.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [SimpleComponent, MultipleComponent],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
