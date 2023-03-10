import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, map, of, shareReplay, switchMap, tap, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Album, Artiste, Playlist, Podcast, Search, SearchString, Track, User } from '../models/search.model';




@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public isLoading = new BehaviorSubject<boolean>(false);

  public isLoading$ = this.isLoading.asObservable();

  public searchCategory = new BehaviorSubject<string>('');

  public searchCategory$ = this.searchCategory.asObservable();

  public searchAction = new BehaviorSubject<SearchString>(null);

  private searchAction$ = this.searchAction.asObservable();

  public searchResults = new BehaviorSubject<Search>(null);

  resetSearchResults: boolean;

  params: HttpParams;

  categories$ = of(["album", "artist", "playlist", "podcast", "track", "user"]);

  searchResults$ = this.searchAction$.pipe(
    filter((searchParams) => !!searchParams),
    switchMap(({ search, category, index }) => {
      this.resetSearchResults = category !== this.searchCategory.getValue();

      this.searchCategory.next(category);

      this.params = new HttpParams({
        fromObject: {
          q: search,
          index,
        }
      })

      const options = {
        headers: {},
        params: this.params
      };

      const result = this.http.get<Search>(
        `/deezer/search/${category}`,
        options
      );

      return result;
    }),
    map((searchResults) => {
      // const items = [];
      // searchResults.data.forEach((item: any, index: number) => {
      //   if(index % 3 == 0) {
      //       let row = [];
      //       row.push(item);
      //       items.push(row);
      //   } else {
      //     items[items.length - 1].push(item);
      //   }
      // });

      // searchResults.data = items;
      return this.updateSearchResults(searchResults);
    }),
    tap((result) => {
      this.isLoading.next(false);
    }),
    shareReplay(1),
    catchError(this.handleError)
  );

  constructor(
    private http: HttpClient
  ) {}

  get category(): string {
    return this.searchCategory.getValue();
  }

  updateSearchResults(searchResults: Search): Search {
    if (this.resetSearchResults) {
      this.searchResults.next(null);
    }

    const { data, total } = { ...this.searchResults?.value };
    const updatedData: (Album | Artiste | Playlist | Podcast | Track | User)[] = data ? [...data, ...searchResults.data] : [...searchResults.data];
    const updatedValue = {
      data: updatedData,
      total,
      next: searchResults.next,
    };

    this.searchResults.next(updatedValue)
    return updatedValue;
  }


  changeSearchString(search: string, category: string, index?: number): void {
    this.searchAction.next({ search, category, index });
  }

  private handleError(err) {
    console.log("handleError")
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (typeof (err) === 'string') {
      errorMessage = err;
    } else {
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
      }
    }
    console.error(err);
    return throwError(() => err);
  }
}
