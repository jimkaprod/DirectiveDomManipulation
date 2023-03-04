import {
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { AlbumCardComponent } from '../components/search-result/components/album-card/album-card.component';
import { ArtisteCardComponent } from '../components/search-result/components/artiste-card/artiste-card.component';
import { ResultComponent } from '../models/search.model';
import { PlaylistCardComponent } from '../components/search-result/components/playlist-card/playlist-card.component';
import { PodcastCardComponent } from '../components/search-result/components/podcast-card/podcast-card.component';
import { TrackCardComponent } from '../components/search-result/components/track-card/track-card.component';
import { UserCardComponent } from '../components/search-result/components/user-card/user-card.component';

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
    } else if (componentType === 'playlist') {
      componentToLoad = PlaylistCardComponent;
    } else if (componentType === 'podcast') {
      componentToLoad = PodcastCardComponent;
    } else if (componentType === 'track') {
      componentToLoad = TrackCardComponent;
    } else if (componentType === 'user') {
      componentToLoad = UserCardComponent;
    }
    const componentLoaded = viewContainerRef.createComponent<ResultComponent>(componentToLoad);
    return componentLoaded;
  }
}
