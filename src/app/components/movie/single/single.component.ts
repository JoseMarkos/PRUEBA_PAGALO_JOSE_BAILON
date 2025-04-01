import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../../services/tmdb.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrl: './single.component.css',
  imports: [
    CommonModule
  ]
})
export class SingleComponent implements OnInit {
  movie: any;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const movieId = params.get('id');
      if (movieId) {
        this.getMovieDetails(movieId);
      }
    });
  }

  getMovieDetails(id: string) {
    this.tmdbService.getMovieById(id).subscribe(
      (response: any) => {
        this.movie = response;
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener los detalles de la película:', error);
        this.isLoading = false;
      }
    );
  }
}
