import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { AutofocusDirective } from '../../directives/autofocus.directive';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AsyncPipe,
    JsonPipe,
    NgFor,
    NgIf,
    AutofocusDirective,
  ],
})
export class SearchBarComponent {
  formGroup = this.fb.group({
    searchCtrl: ['', [Validators.required]],
    categoryCtrl: ['', [Validators.required]]
  });

  categories$ = this.searchService.categories$;


  constructor(
    private searchService: SearchService,
    private fb: FormBuilder,
  ) {}

  submit(): void {
    this.searchService.isLoading.next(true);
    this.searchService.changeSearchString(
      this.formGroup.get('searchCtrl').value,
      this.formGroup.get('categoryCtrl').value,
    );
  }
}
