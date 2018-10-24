import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  // {path: 'movie/:texto', component: MovieComponent},
  {path: '', component: MovieComponent}
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