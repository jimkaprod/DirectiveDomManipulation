import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../services/search.service';
import { Search } from '../../models/search.model';
import { SearchComponentLoaderService } from '../../services/search-component-loader.service';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { SearchHostDirective } from '../../directives/search-host.directive';

@Component({
  selector: 'app-search-result',
  standalone: true,
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  imports: [CommonModule, CardHeaderComponent],
})
export class SearchResultComponent {
  @Input() searchResults: Search;

  searchCategory$ = this.searchService.searchCategory$;

  @ViewChild('searchComponentRef', { read: ViewContainerRef })
  searchComponentRef: ViewContainerRef;

  @ViewChild(SearchHostDirective, { static: true }) appSearchHost!: SearchHostDirective;

  constructor(
    private searchService: SearchService,
    private searchComponentLoaderService: SearchComponentLoaderService,
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const componentRef = this.searchComponentLoaderService.addDynamicComponent(
      this.searchComponentRef,
      this.searchService.category
    );
    componentRef.instance.searchResults$ = this.searchService.searchResults$;
    componentRef.instance.elementVisible.subscribe((elementVisible) => this.prevNext(elementVisible));
  }

  prevNext(elementVisible: boolean): void {
    if (elementVisible && this.searchResults.next) {
      const index: number = +new URLSearchParams(this.searchResults.next).get("index");
      const { search, category } = this.searchService.searchAction.getValue();
      this.searchService.changeSearchString(
        search,
        category,
        index,
      );
    }
  }
}
