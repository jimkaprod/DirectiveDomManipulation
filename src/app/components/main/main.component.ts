import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [ListComponent],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
