import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { ListService } from '../services/list.service';
import { NasaService } from '../../../core/services/nasa.service';
import { AsyncPipe, CommonModule, JsonPipe, NgFor } from '@angular/common';
import { CardImageComponent } from '../../../core/components/card-image/card-image.component';
import { CardImageTopComponent } from '../../../core/components/card-image-top/card-image-top.component';
import { HttpClientModule } from '@angular/common/http';
import { tap } from 'rxjs';
import { IngredientService } from '../../../food/services/ingredient.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchService } from '../../../deezer/services/search.service';


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
    ReactiveFormsModule,
  ],
  providers: [
    ListService,
    NasaService,
    IngredientService,
  ],
})
export class MainComponent implements OnInit {
  list$ = this.listService.itemsList$;
  marsPhotos$ = this.nasaService.marsPhotos$;
  ingredients$ = this.ingredientService.ingredient$;
  selectedIngredient$ = this.ingredientService.selectedIngredient$;
  search$ = this.searchService.searchResults$;

  formGroup = this.fb.group({
    ingredientCtrl: ['', [Validators.required]]
  });

  constructor(
    private listService: ListService,
    private nasaService: NasaService,
    private ingredientService: IngredientService,
    private searchService: SearchService,
    private fb: FormBuilder,
  ) {
    console.log("ECHO")
  }

  ngOnInit() {

  }

  submit(): void {
    this.ingredientService.changeSelectedProduct('banana');
    console.log("formGroupValue>>>", this.formGroup.value);
  }
}
