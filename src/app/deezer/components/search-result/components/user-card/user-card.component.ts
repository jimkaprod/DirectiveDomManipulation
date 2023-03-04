import { Component, EventEmitter, Output } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { User, ResultComponent, Search } from '../../../../models/search.model';
import { NgOptimizedImage } from '@angular/common'
import { AmIVisibleDirective } from '../../../../directives/am-i-visible.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  imports: [CommonModule, NgOptimizedImage, AmIVisibleDirective, AsyncPipe],
})
export class UserCardComponent  implements ResultComponent {
  @Output('elementVisible') elementVisible = new EventEmitter<boolean>();

  emitElementVisible(fetchData: boolean) {
    this.elementVisible.emit(fetchData);
  }

  searchResults$: Observable<Search>;

  trackByIndex = (index: number, item: User) => item.id;
}
