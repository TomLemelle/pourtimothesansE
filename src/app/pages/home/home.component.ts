import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this._movieService.GetMovies().subscribe(movies => {

    })
  }

}
