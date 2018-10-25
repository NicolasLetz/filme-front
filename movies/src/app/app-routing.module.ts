import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path: '', component: MovieComponent},
  {path: 'detalhe/:imdbID', component: MovieDetailComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }