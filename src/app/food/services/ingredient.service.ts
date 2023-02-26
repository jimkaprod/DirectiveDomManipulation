import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, combineLatest, map, of, switchMap, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private API_KEY = "92fb028d7009434da92ed6a69ea3f30a";
  private BASE_URL = "https://api.spoonacular.com/food";
  private SEARCH_PATH = "ingredients/search";
  private header = new HttpHeaders({ 'x-api-key': this.API_KEY });

  private ingredientSelectedAction = new BehaviorSubject<number>(0);

  constructor(
    private http: HttpClient
  ) {}

  params = new HttpParams({
    // fromObject: { query: 'banana' }
  });
  options = {
    headers: this.header,
    params: this.params
  };

  ingredient$: Observable<Ingredient[]> = this.http.get<Ingredient[]>(
    this.BASE_URL + this.SEARCH_PATH,
    this.options
  )
    .pipe(
      tap(console.log),
      map((results) => results)
    );

  selectedIngredient$ = this.ingredientSelectedAction
    .pipe(
      tap(() => console.log("ouech ouech>>>", `/spoonacular/${this.SEARCH_PATH}`)),
      switchMap((ingredientName) => {
        return this.http.get<Ingredient[]>(
          '/deezer/artist/17',
          this.options
        )
      }),
      // map(([selectedIngredientName, products]) =>
      //   products.find(product => product.id === selectedProductId)
      // ),
      // tap(product => console.log('selectedProduct', product)),
      // shareReplay(1),
      // catchError(this.handleError)
    );

  changeSelectedProduct(productName: string | null): void {
    console.log("changeSelectedProduct-->", productName)
    this.ingredientSelectedAction.next(17);
  }

}
