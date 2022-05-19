import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {environment} from "../environments/environment";
import {InMemoryDataService} from "./mock/InMemoryDataService";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './pages/search/search.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorDirective } from './error.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AuthComponent,
    ErrorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    !environment.production
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 100})
      : [],
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
