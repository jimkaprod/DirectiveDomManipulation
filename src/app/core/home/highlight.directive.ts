import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.setAttribute(this.appHighlight, '');
  }
}
