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
  constructor() {}

  addDynamicComponent(viewContainerRef: ViewContainerRef) {
    viewContainerRef.createComponent(DynamicComponent);
  }
}
