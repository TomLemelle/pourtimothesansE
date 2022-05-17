import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../models/movie";
import {MoviesService} from "../../../services/movies.service";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  movies: Movie[] | undefined;

  constructor(
    private _movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this._movieService.GetMovies().subscribe(movies => {
      this.movies = movies;
    })
  }
}
