import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appAppendTarget]',
  standalone: true,
})
export class AppendTargetDirective {
  @Input() appendTarget: TemplateRef<any>;
}