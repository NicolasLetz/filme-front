import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  getMoviesHome(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8080/movies');
  }
  getMoviesBD(texto: string) : Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8080/movies/' + texto);
  }
  getListaMoviesFromOMDB(texto: string) : Observable<Movie[]>{
    return this.http.get<Movie[]>('http://localhost:8080/'+ texto);
  }

 }

