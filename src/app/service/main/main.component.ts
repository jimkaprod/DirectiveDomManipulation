import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ServiceLoaderService } from '../service-loader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
})
export class MainComponent implements OnInit {
  @ViewChild('dynamic', { read: ViewContainerRef })
  dynamicViewcontainerRef: ViewContainerRef;

  constructor(
    private service: ServiceLoaderService,
    private viewContainerRef: ViewContainerRef
  ) {
    service.addDynamicComponent(this.viewContainerRef);
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.service.addDynamicComponent(this.dynamicViewcontainerRef);
  }
}
