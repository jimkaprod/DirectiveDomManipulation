import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MarsPhoto } from '../models/mars-photo';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private API_KEY = "mh5ty0me8E9Ll0BOe1xUZQwHpD0kJHwVKftZrGWQ";
  private BASE_URL = "https://api.nasa.gov";
  private MARS_PHOTO_PATH = "/mars-photos/api/v1/rovers/curiosity/photos";
  //?api_key=mh5ty0me8E9Ll0BOe1xUZQwHpD0kJHwVKftZrGWQ
  // https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
  // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY  
  // https://api.nasa.gov/planetary/apod?api_key=mh5ty0me8E9Ll0BOe1xUZQwHpD0kJHwVKftZrGWQ
  constructor(
    private http: HttpClient
  ) {}

  getMarsPhotos(): Observable<MarsPhoto[]> {
    const params = new HttpParams({ fromObject: { api_key: this.API_KEY, sol: 1000, page: 2 } });
    const options = { params };

    return this.http.get<MarsPhoto[]>(this.BASE_URL + this.MARS_PHOTO_PATH, options)
      .pipe(
        map((results) => results['photos'])
      );
  }

  params = new HttpParams({ fromObject: { api_key: this.API_KEY, sol: 1000, page: 2 } });
  options = { params: this.params };
  marsPhotos$: Observable<MarsPhoto[]> = this.http.get<MarsPhoto[]>(this.BASE_URL + this.MARS_PHOTO_PATH, this.options)
    .pipe(
      map((results) => results['photos'])
    );

}
