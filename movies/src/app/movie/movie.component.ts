import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitterService } from '../emiter.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  movies: Array<Movie>;
  texto:string;
  constructor(
    private service: MovieService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movies= new Array<Movie>();
    this.movie = new Movie();
    this.getMoviesHome();

    console.log('on init do movie');
    EventEmitterService.get('event.atualizar.lista')
      .subscribe(resp => {
        this.movies = resp;
        console.log('evento disparado!');
      });
      EventEmitterService.get('evento.pesquisar.OMDB').subscribe(resp => {
        this.movies = resp;
      });
  }
  getMoviesHome() {
    this.movies= new Array<Movie>();
    this.service.getMoviesHome().subscribe(resposta => this.movies = resposta);
  }

  getMoviesBD() {
    this.movies= new Array<Movie>();
    this.service.getMoviesBD(this.texto).subscribe(resposta => this.movies = resposta);
  }
  getMoviesFromOMDB() {
    this.movies = new Array<Movie>();
    this.service.getListaMoviesFromOMDB(this.texto).subscribe(resposta => this.movies = resposta);
  }
}