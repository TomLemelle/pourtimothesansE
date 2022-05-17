import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {PagesRoutingModule} from "./pages-routing.module";
import {ComponentsModule} from "../components/components.module";
import {AppModule} from "../app.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    AppModule
  ]
})
export class PagesModule { }
