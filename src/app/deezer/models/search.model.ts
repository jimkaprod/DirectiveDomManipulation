import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

export interface Search {
  data: (Album | Artiste)[];
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

export interface DynamicSearchComponent {
  searchResults$: Observable<Search>;
  elementVisible: EventEmitter<boolean>;
}


// export type AlbumSearch = Search & Album;

// export type ArtisteSearch = Search & Artiste;

export type TypeName = "album" | "artiste";

export type ObjectType<T> =
  T extends "album" ? Album[] :
  T extends "artiste" ? Artiste[] :
  never;

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

// export interface Album extends Id {
//   data: AlbumDetails;
// }

export interface Artiste extends Id, Picture {
  name: string;
  link: string;
  tracklist: string;
}

// export interface Artiste {
//   data: ArtisteDetails;
// }

export interface PlaylistSearch extends Id, Picture {
  title: string;
  public: boolean;
  nb_tracks: number;
  link: string;
  checksum: string;
  tracklist: string;
  creation_date: string;
  md5_image: string;
  picture_type: string;
  user: UserSearch;
}

export interface UserSearch extends Id, Picture {
  name: string;
  tracklist: string;
}

export interface PodcastSearch extends Id, Picture {
  title: string;
  description: string;
  available: boolean;
  fans: string;
  link: string;
  share: string;
}

export interface TrackSearch extends Id {
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

