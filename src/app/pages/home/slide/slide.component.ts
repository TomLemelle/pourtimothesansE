import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../models/movie";
import {MoviesService} from "../../../services/movies.service";
import {Subscription} from "rxjs";
import {faLeftLong, faRightLong} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() category: string | undefined;
  movies: Movie[] | undefined;
  subscription: Subscription | undefined;
  slide: number = 0;

  leftArrow = faLeftLong;
  rightArrow = faRightLong;

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

  slideMovies(value: number) {
    this.slide += value;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
