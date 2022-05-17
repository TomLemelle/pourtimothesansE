import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
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

  @ViewChild('viewContainer', { read: ElementRef }) slideContainer: ElementRef | undefined

  movies: Movie[] | undefined;
  subscription: Subscription | undefined;
  slide: number = 0;

  leftArrow = faLeftLong;
  rightArrow = faRightLong;

  constructor(
    private _movieService: MoviesService,
    private _rendered: Renderer2
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
    if(this.slide < 0) {
      this.slide = 0;
    }
    if(this.slideContainer) {
      this._rendered.setStyle(this.slideContainer.nativeElement, 'transform',`translateX(${this.slide}%)`);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
