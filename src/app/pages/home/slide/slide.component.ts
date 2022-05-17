import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../models/movie";
import {MoviesService} from "../../../services/movies.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() category: string | undefined;
  movies: Movie[] | undefined;
  subscription: Subscription | undefined;

  constructor(
    private _movieService: MoviesService
  ) { }

  ngOnInit(): void {
    if(this.category) {
      this._movieService.GetMovies(this.category).subscribe(movies => {
        this.movies = movies;
      })
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
