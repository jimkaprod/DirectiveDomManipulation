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

  // appendTarget: TemplateRef<any>;

  constructor(
    private elemRef: ElementRef,
    private service: ServiceLoaderService 
    // private appendTargetDirective: AppendTargetDirective
  ) {}

  ngOnInit(): void {
    console.log('directive');
  }

  @HostListener('click') onMouseClick() {
    // const view = this.template.createEmbeddedView(null);
    // this.service.addDynamicComponent(view);
    // this.service.addDynamicComponent(this.template);
  }
}
