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

  slideElement = 222;
  slideStep = 444;
  slideMaximum = 0;
  slideMarginWidth = 10;

  constructor(
    private _movieService: MoviesService,
    private _rendered: Renderer2
  ) { }

  ngOnInit(): void {
    if(this.category) {
      this.subscription = this._movieService.GetMovies(this.category).subscribe(movies => {
        this.movies = movies;
        // @ts-ignore
        this.slideMaximum = (((this.slideElement + this.slideMarginWidth) * this.movies.length) - this.slideMarginWidth) - window.innerWidth;
      })
    }
  }

  slideMovies(value: number) {
    console.log(this.slideMaximum, 'slide Maximum');
    this.slide += this.slideStep * value;
    if(Math.abs(this.slide) >= this.slideMaximum) {
      this.slide = (this.slideMaximum * -1);
    }

    /*console.log('slide+1000:' + this.slide)
    console.log('slidedcontainer:' + this.slideContainer?.nativeElement.clientWidth)
    if((this.slide + 1000 ) >= this.slideContainer?.nativeElement.clientWidth) {
      this.slide = 0;
    }*/

    if(this.slideContainer) {
      this._rendered.setStyle(this.slideContainer.nativeElement, 'transform',`translateX(${this.slide}px)`);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
