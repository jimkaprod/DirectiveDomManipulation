import { Component, EventEmitter, Output } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Podcast, ResultComponent, Search } from '../../../../models/search.model';
import { NgOptimizedImage } from '@angular/common'
import { AmIVisibleDirective } from '../../../../directives/am-i-visible.directive';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-podcast-card',
  standalone: true,
  templateUrl: './podcast-card.component.html',
  styleUrls: ['./podcast-card.component.scss'],
  imports: [CommonModule, NgOptimizedImage, AmIVisibleDirective, AsyncPipe],
})
export class PodcastCardComponent implements ResultComponent  {
  @Output('elementVisible') elementVisible = new EventEmitter<boolean>();

  emitElementVisible(fetchData: boolean) {
    this.elementVisible.emit(fetchData);
  }

  searchResults$: Observable<Search>;

  trackByIndex = (index: number, item: Podcast) => item.id;


}
