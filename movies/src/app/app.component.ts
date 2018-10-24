import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie/movie';
import { EventEmitterService } from './emiter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  texto: string;
  isPesquisado: boolean;

  constructor( private service: MovieService) { }
  
  ngOnInit(): void { }

  getMoviesBD() {

    this.isPesquisado = true;
    console.log(this.texto);
    this.service.getMoviesBD(this.texto).subscribe(resposta => {
      EventEmitterService.get('event.atualizar.lista')
        .emit(resposta);
    });
  }
  getMoviesFromOMDB() {
    
    this.isPesquisado=false;
    this.service.getListaMoviesFromOMDB(this.texto).subscribe(resposta =>{
      EventEmitterService.get('evento.pesquisar.OMDB').emit(resposta);
   
    });
  }
}