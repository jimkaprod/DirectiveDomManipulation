import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAddContent]',
  standalone: true,
})
export class AddContentDirective {
  @Input() appAddContent;
  @Input() tpl;

  @ViewChild('appAddContent', { read: ViewContainerRef }) viewContainer: ViewContainerRef;

  @ViewChild('tpl') tplAddContent: TemplateRef<any>;

  constructor(
    private elemRef: ElementRef,
  ) { }

  @HostListener('click', ['$event'])
  public click(e: Event): void {
    // console.log("--->>", this.elemRef.nativeElement.parentNode)
    console.log("--->0>", this.tplAddContent)
    console.log("--->1>", this.appAddContent)
    console.log("--->2>", this.viewContainer)
    let view = this.tplAddContent.createEmbeddedView(null);
    this.viewContainer.insert(view);

    

    e.preventDefault();
  }


}