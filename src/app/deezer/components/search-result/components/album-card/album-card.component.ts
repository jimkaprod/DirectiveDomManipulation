import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Album, Search } from '../../../../models/search.model';
import { NgOptimizedImage } from '@angular/common'
import { AmIVisibleDirective } from '../../../../directives/am-i-visible.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, AmIVisibleDirective, AsyncPipe],
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  @Output('elementVisible') elementVisible = new EventEmitter<boolean>();
  emitElementVisible(fetchData: boolean) {
    this.elementVisible.emit(fetchData);
  }

  searchResults$: Observable<Search>;

  trackByIndex = (index: number, item: Album) => index;
}
