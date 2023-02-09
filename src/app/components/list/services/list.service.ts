import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() {}

  getListItems(): Observable<Item[]> {
    return of([
      {
        titre: 'mon 1er',
        description: 'ca commence bien',
      },
      {
        titre: 'mon 2eme',
        description: 'Et ca continue',
      },
      {
        titre: 'mon 3eme',
        description: 'Encore et encore',
      },
    ]);

  }
}
