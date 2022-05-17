import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {PagesRoutingModule} from "./pages-routing.module";
import {ComponentsModule} from "../components/components.module";
import { SlideComponent } from './home/slide/slide.component';

@NgModule({
  declarations: [
    HomeComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
