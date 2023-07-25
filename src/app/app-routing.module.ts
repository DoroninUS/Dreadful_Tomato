import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HoumePageComponent} from "./components/Houme_page/houme-page.component";
import {MoviesPageComponent} from "./components/Movies_page/movies-page.component";
import {TvShowsPageComponent} from "./components/TV_shows_page/tv-shows-page.component";

const routes: Routes = [
  {path: '', component: HoumePageComponent},
  {path: 'movies', component: MoviesPageComponent},
  {path: 'tv-shows', component: TvShowsPageComponent},

  {path: '**', redirectTo: '', component: HoumePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
