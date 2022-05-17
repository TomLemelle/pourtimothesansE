import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../models/movie";
import {MoviesService} from "../../../services/movies.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  movies: Movie[] | undefined;
  subscription: Subscription | undefined;

  constructor(
    private _movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this._movieService.GetMovies().subscribe(movies => {
      this.movies = movies;
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
