import { Component, EventEmitter, Output } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Playlist, ResultComponent, Search } from '../../../../models/search.model';
import { NgOptimizedImage } from '@angular/common'
import { AmIVisibleDirective } from '../../../../directives/am-i-visible.directive';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-playlist-card',
  standalone: true,
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss'],
  imports: [CommonModule, NgOptimizedImage, AmIVisibleDirective, AsyncPipe],
})
export class PlaylistCardComponent implements ResultComponent {
  @Output('elementVisible') elementVisible = new EventEmitter<boolean>();

  emitElementVisible(fetchData: boolean) {
    this.elementVisible.emit(fetchData);
  }

  searchResults$: Observable<Search>;

  trackByIndex = (index: number, item: Playlist) => item.id;
}
