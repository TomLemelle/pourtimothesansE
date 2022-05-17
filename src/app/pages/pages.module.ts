import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {PagesRoutingModule} from "./pages-routing.module";
import {ComponentsModule} from "../components/components.module";
import { SlideComponent } from './home/slide/slide.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PagesComponent } from './pages.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    HomeComponent,
    SlideComponent,
    SearchBarComponent,
    PagesComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ComponentsModule,
        FontAwesomeModule,
    ]
})
export class PagesModule { }
