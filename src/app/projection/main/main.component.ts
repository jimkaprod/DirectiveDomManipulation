import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { MultipleComponent } from '../multiple/multiple.component';
import { SimpleComponent } from '../simple/simple.component';
import { TabDirective } from '../tab.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [SimpleComponent, MultipleComponent, DynamicComponent, TabDirective],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
