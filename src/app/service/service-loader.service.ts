import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponent } from './dynamic-component/dynamic.component';
@Injectable()
export class ServiceLoaderService {
  viewContainerRefActif: ViewContainerRef;

  constructor() {}

  addDynamicComponent(viewContainerRef: ViewContainerRef) {
    if (this.viewContainerRefActif) {
      this.viewContainerRefActif.clear();
    }
    this.viewContainerRefActif = viewContainerRef;
    viewContainerRef.createComponent(DynamicComponent);
  }
}
