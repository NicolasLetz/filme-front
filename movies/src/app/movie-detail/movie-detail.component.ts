import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  imdbID: string;
  constructor(
    private route : ActivatedRoute,
    private service: MovieService
  ) { }

  ngOnInit() {
    this.movie = new Movie();
    this.imdbID = this.route.snapshot.paramMap.get('imdbID');
    console.log(this.imdbID);

    this.service.getDetailsMovie(this.imdbID).subscribe(resposta => {
      this.movie = resposta;
      console.log(resposta);
      console.log("THIS.MOVIE AQUI >>>" + this.movie.Actors);
    });
  }
  
}
