import { Component, Input, OnInit } from '@angular/core';
import { ItemListComponent } from '../../../projection2/item-list/item-list.component';
import { Item } from '../models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  standalone: true,
})
export class ListItemComponent implements OnInit {
  @Input() item: Item;

  constructor() {}

  ngOnInit() {}
}
