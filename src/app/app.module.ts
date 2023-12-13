import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import { NotFoundComponent } from './not-found/not-found.component';

import{ HttpClientModule} from '@angular/common/http';

import { MoviesComponent } from './movies/movies.component';
import { RegisterPagComponent } from './register-pag/register-pag.component';
import { LoginComponent } from './login/login.component';
import { TvComponent } from './tv/tv.component';
import { SinglMovieComponent } from './singl-movie/singl-movie.component';
import { RecommendPipe } from './recommend.pipe';
import { SerchPipe } from './serch.pipe';
import { HomeComponent } from './home/home.component';



//  decorator
@NgModule({
  // class of component of that module
  declarations: [
    AppComponent,
      NavbarComponent,
      FooterComponent,
      NotFoundComponent,
      MoviesComponent,
      RegisterPagComponent,
      LoginComponent,
      TvComponent,
      SinglMovieComponent,
      RecommendPipe,
      SerchPipe,
      HomeComponent,
   
   
           
  ],
  // الموديل الاخري اللي عايزه حاجه من الموديل بتاعتنا
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    FormsModule,
 HttpClientModule,
 ReactiveFormsModule
  ],
  // api for data
  providers: [],
  // root component
  bootstrap: [AppComponent]
})
export class AppModule { }
