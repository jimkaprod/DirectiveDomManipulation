import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightBest]',
  standalone: true,
})
export class HighlightBestDirective implements OnInit {
  @Input() appHighlightBest;

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngOnInit() {
    this.renderer.setAttribute(
      this.element.nativeElement,
      this.appHighlightBest,
      ''
    );
  }
}
