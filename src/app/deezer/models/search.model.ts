import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export interface ResultComponent {
  searchResults$: Observable<Search>;
  elementVisible: EventEmitter<boolean>;
  trackByIndex: ((index: number, item: Album | Artiste | Playlist | Podcast | Track | User) => number);
}


export interface Search {
  data: (Album[] | Artiste[] | Playlist[] | Podcast[] | Track[] | User[])[];
  prev?: string;
  next?: string;
  total: number;
}

export interface SearchString {
  search: string;
  category: string;
  index?: number;
}

export interface Id {
  id: number;
  type: string;
}


export interface Picture {
  picture?: string;
  picture_small?: string;
  picture_medium?: string;
  picture_big?: string;
  picture_xl?: string;
}

export interface Album extends Id {
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  genre_id?: number;
  nb_tracks?: number;
  record_type?: string;
  tracklist: string;
  explicit_lyrics?: boolean;
  artist?: Artiste;
}

export interface Artiste extends Id, Picture {
  name: string;
  link: string;
  tracklist: string;
}

export interface Playlist extends Id, Picture {
  title: string;
  public: boolean;
  nb_tracks: number;
  link: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  md5_image: string;
  picture_type: string;
  user: User;
}

export interface User extends Id, Picture {
  name: string;
  tracklist: string;
}

export interface Podcast extends Id, Picture {
  title: string;
  description: string;
  available: boolean;
  fans: string;
  link: string;
  share: string;
}

export interface Track extends Id {
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
  md5_image: string;
  artist: Artiste,
  album: Album,
}

