import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appAmIVisible]',
  standalone: true,
})
export class AmIVisibleDirective {
  constructor(private element: ElementRef) {}

  @Output('elementVisible') elementVisible = new EventEmitter<boolean>();
  @Input('isTargetElement') isTargetElement: boolean;

  public intersectionOptions = {
    root: null, //implies the root is the document viewport
    rootMargin: '0px',
    threshold: [0, 0.5, 1],
  };

  ngAfterViewInit() {
    let observer = new IntersectionObserver(
      this.intersectionCallback.bind(this),
      this.intersectionOptions
    );
    console.log("---->>>>00--->>>", this.isTargetElement)
    if (this.isTargetElement) {
      console.log("---->>>>11--->>>", this.element.nativeElement)
      observer.observe(this.element.nativeElement);
    }
  }

  intersectionCallback(entries, observer) {
    console.log("intersectionCallback")

    entries.forEach((entry) => {
      console.log('>>>>', entry.intersectionRatio, 1)
      if (entry.intersectionRatio === 1) {
        this.elementVisible.emit(true); //element is completely visible in the viewport
      } else {
        this.elementVisible.emit(false);
      }
    });
  }
}
