import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {MovieComponent} from './movie/movie.component';
import {MovieService} from './movie/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
