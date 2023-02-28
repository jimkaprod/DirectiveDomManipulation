import {
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { AlbumCardComponent } from '../components/search-result/components/album-card/album-card.component';
import { ArtisteCardComponent } from '../components/search-result/components/artiste-card/artiste-card.component';
import { ResultComponent } from '../models/search.model';

@Injectable()
export class SearchComponentLoaderService {
  viewContainerRefActif: ViewContainerRef;

  constructor() {}

  addDynamicComponent(viewContainerRef: ViewContainerRef, componentType: string) {
    if (this.viewContainerRefActif) {
      this.viewContainerRefActif.clear();
    }
    this.viewContainerRefActif = viewContainerRef;
    let componentToLoad;
    if (componentType === 'album') {
      componentToLoad = AlbumCardComponent;
    } else if (componentType === 'artist') {
      componentToLoad = ArtisteCardComponent;
    }
    const componentLoaded = viewContainerRef.createComponent<ResultComponent>(componentToLoad);
    return componentLoaded;
  }
}
