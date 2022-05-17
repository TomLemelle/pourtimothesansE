import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieComponent} from "./movie/movie.component";

let components = [
  MovieComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
