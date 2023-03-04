import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from '../search-result/components/album-card/album-card.component';
import { albums } from './mock';
import { Observable, of } from 'rxjs';
import { Search } from '../../models/search.model';
import { SearchComponentLoaderService } from '../../services/search-component-loader.service';

@Component({
  selector: 'app-components-visualisation',
  standalone: true,
  templateUrl: './components-visualisation.component.html',
  styleUrls: ['./components-visualisation.component.scss'],
  imports: [CommonModule, AlbumCardComponent],
})
export class ComponentsVisualisationComponent {
  @ViewChild('searchComponentRef', { read: ViewContainerRef })
  searchComponentRef: ViewContainerRef;

  albums$: Observable<Search> = of(albums);

  constructor(
    readonly searchComponentLoaderService: SearchComponentLoaderService
  ){}

  ngAfterViewInit(): void {
    const componentRef = this.searchComponentLoaderService.addDynamicComponent(
      this.searchComponentRef,
      'album'
    );
    componentRef.instance.searchResults$ = this.albums$;
  }
}
