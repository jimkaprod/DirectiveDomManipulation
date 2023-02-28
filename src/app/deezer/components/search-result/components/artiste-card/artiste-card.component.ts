import { Component, EventEmitter, Output } from '@angular/core';
import { AsyncPipe, CommonModule, NgOptimizedImage } from '@angular/common';
import { Artiste, ResultComponent, Search } from '../../../../models/search.model';
import { Observable } from 'rxjs';
import { AmIVisibleDirective } from '../../../../directives/am-i-visible.directive';

@Component({
  selector: 'app-artiste-card',
  standalone: true,
  templateUrl: './artiste-card.component.html',
  styleUrls: ['./artiste-card.component.scss'],
  imports: [CommonModule, NgOptimizedImage, AmIVisibleDirective, AsyncPipe],
})
export class ArtisteCardComponent implements ResultComponent {
  @Output('elementVisible') elementVisible = new EventEmitter<boolean>();

  emitElementVisible(fetchData: boolean) {
    this.elementVisible.emit(fetchData);
  }

  searchResults$: Observable<Search>;

  trackByIndex = (index: number, item: Artiste) => index;
}
