import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTab]',
  standalone: true,
})
export class TabDirective {
  @Input('appTab') name: string;

  constructor(public template: TemplateRef<any>) {}
}
