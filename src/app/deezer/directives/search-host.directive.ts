import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSearchHost]',
  standalone: true
})
export class SearchHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}
}
