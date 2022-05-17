import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _client: HttpClient) { }

  GetMovies(category: string): Observable<any> {
    return this._client.get<Movie[]>(`api/movies?category=${category}`);
  }

  GetCategories(): Observable<string[]> {
    return this._client.get<string[]>('api/categories');
  }

  GetMovie(title: string) {

  }
}
