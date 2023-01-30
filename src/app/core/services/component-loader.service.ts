import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  ViewContainerRef,
  Type,
} from '@angular/core';
@Injectable()
export class ComponentLoaderService {
  viewContainerRefActif: ViewContainerRef;

  constructor() {}

  addComponent(
    viewContainerRef: ViewContainerRef,
    dynamicComponent: Type<unknown>
  ) {
    if (this.viewContainerRefActif) {
      this.viewContainerRefActif.clear();
    }
    this.viewContainerRefActif = viewContainerRef;
    viewContainerRef.createComponent<unknown>(dynamicComponent);
  }
}
