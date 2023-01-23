import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomStructure1ParentComponent } from './dom-structure-1-parent/dom-structure-1-parent.component';
import { DomStructure2ParentComponent } from './dom-structure-2-parent/dom-structure-2-parent.component';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [HighlightDirective, DomStructure1ParentComponent, DomStructure2ParentComponent],
})
export class HomeComponent implements OnInit {
  @ViewChild('el') span: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.span.nativeElement.setAttribute('highlight', '');
  }
}
