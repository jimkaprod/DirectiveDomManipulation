import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [ListItemComponent],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
