import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, combineLatest, concatMap, delay, filter, map, mergeMap, of, scan, shareReplay, switchMap, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Album, Artiste, PlaylistSearch, PodcastSearch, Search, SearchString, TrackSearch, UserSearch } from '../models/search.model';




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

  searchResults$ = this.searchAction$.pipe(
    filter((searchParams) => !!searchParams),
    switchMap(({ search, category, index }) => {
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
    map((result) => {
      const { data, next, total } = { ...this.searchResults?.value };
      const updatedData: (Album | Artiste)[] = data ? [...data, ...result.data] : [...result.data];
      const updatedValue = {
        data: updatedData,
        total,
        next: result.next,
      };
      this.searchResults.next(updatedValue)
      return updatedValue;
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

  params: HttpParams;

  categories$ = of(["album", "artist", "history", "playlist", "podcast", "radio", "track", "user"]);

  get category(): string {
    return this.searchCategory.getValue();
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
