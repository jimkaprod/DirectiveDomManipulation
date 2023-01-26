import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  standalone: true,
})
export class SimpleComponent implements OnInit {
  @Input('title') title: string;
  constructor() {}

  ngOnInit() {}
}
