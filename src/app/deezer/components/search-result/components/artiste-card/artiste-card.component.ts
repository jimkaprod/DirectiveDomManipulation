import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search } from '../../../../models/search.model';

@Component({
  selector: 'app-artiste-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artiste-card.component.html',
  styleUrls: ['./artiste-card.component.scss']
})
export class ArtisteCardComponent {
  searchResults: Search;
}
