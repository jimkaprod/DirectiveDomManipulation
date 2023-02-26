import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    CommonModule,
    SearchComponent,
    SearchResultComponent,
    JsonPipe,
  ],
})
export class MainComponent {
  searchResults$ = this.searchService.searchResults$;

  isLoading$ = this.searchService.isLoading$;

  constructor(
    private searchService: SearchService,
  ) {}
}
