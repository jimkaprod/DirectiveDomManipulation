import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
})
export class MainComponent implements OnInit {
  @ViewChild('listView', { read: ViewContainerRef }) listView: ViewContainerRef;

  constructor() {}

  ngOnInit() {}
}
