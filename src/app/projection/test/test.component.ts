import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  standalone: true,
  imports: [NgTemplateOutlet]
})
export class TestComponent implements OnInit {
  @Input('template') template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}