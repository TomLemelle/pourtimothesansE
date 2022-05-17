import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: Observable<string[]>;

  constructor(
    private _moviesService: MoviesService
  ) {
    this.categories = this._moviesService.GetCategories();
  }

  ngOnInit(): void {
  }

}
