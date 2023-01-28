import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ServiceLoaderService } from '../service/service-loader.service';
import { AppendTargetDirective } from './append-target.directive';

@Directive({
  selector: '[appAddContent]',
  standalone: true,
})
export class AddContentDirective {
  @Input() tpl;

  @ViewChild('') tplAddContent: TemplateRef<any>;

  @Input('appendTarget') appendTarget: TemplateRef<any>;

  @Input() template: TemplateRef<any>;

  @Input() child: TemplateRef<{}>;

  // appendTarget: TemplateRef<any>;

  constructor(
    private elemRef: ElementRef,
    private service: ServiceLoaderService // private appendTargetDirective: AppendTargetDirective
  ) {}

  ngOnInit(): void {
    console.log('directive');
  }

  @HostListener('click') onMouseClick() {
    const view = this.child.createEmbeddedView(null);
    // this.template.insert(view);
    console.log('caaalick>', view);
    // @HostListener('click', ['$event'])
    // public click(e: Event): void {
    // console.log("--->>", this.elemRef.nativeElement.parentNode)
    // console.log("--->0>", this.tplAddContent)
    // console.log("--->1>", this.appAddContent)
    // console.log("--->2>", this.viewContainer)
    // this.viewContainer.insert(view);

    // this.appendTarget = this.appendTargetDirective.appAppendTarget;

    // e.preventDefault();
  }
}
