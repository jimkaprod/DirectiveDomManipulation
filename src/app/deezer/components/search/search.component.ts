import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { SearchService } from '../../services/search.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [
    CommonModule,
    SearchBarComponent,
    SearchResultComponent,
    JsonPipe,
    RouterOutlet,
  ],
})
export class SearchComponent {
  searchResults$ = this.searchService.searchResults$;

  isLoading$ = this.searchService.isLoading$;

  constructor(
    private searchService: SearchService,
  ) {}
}
