import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { ListService } from '../services/list.service';
import { NasaService } from '../../../core/services/nasa.service';
import { AsyncPipe, CommonModule, JsonPipe, NgFor } from '@angular/common';
import { CardImageComponent } from '../../../core/components/card-image/card-image.component';
import { CardImageTopComponent } from '../../../core/components/card-image-top/card-image-top.component';
import { HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [
    ListItemComponent,
    AsyncPipe, JsonPipe,
    NgFor,
    CardImageComponent,
    CardImageTopComponent,
  ],
  providers: [
    ListService,
    NasaService,
  ],
})
export class MainComponent implements OnInit {
  list$ = this.listService.getListItems();
  marsPhotos$ = this.nasaService.getMarsPhotos();

  constructor(
    private listService: ListService,
    private nasaService: NasaService,
  ) {
    console.log("ECHO")
  }

  ngOnInit() {

  }
}
