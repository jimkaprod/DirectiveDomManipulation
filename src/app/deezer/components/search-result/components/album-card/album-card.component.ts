import { Component, EventEmitter, Output } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Album, ResultComponent, Search } from '../../../../models/search.model';
import { NgOptimizedImage } from '@angular/common'
import { AmIVisibleDirective } from '../../../../directives/am-i-visible.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-card',
  standalone: true,
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
  imports: [CommonModule, NgOptimizedImage, AmIVisibleDirective, AsyncPipe],
})
export class AlbumCardComponent implements ResultComponent {
  @Output('elementVisible') elementVisible = new EventEmitter<boolean>();

  emitElementVisible(fetchData: boolean) {
    this.elementVisible.emit(fetchData);
  }

  searchResults$: Observable<Search>;

  trackByIndex = (index: number, item: Album) => index;
}
