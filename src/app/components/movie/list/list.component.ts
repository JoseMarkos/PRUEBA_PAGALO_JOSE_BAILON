import { Component, Input, OnInit, HostListener } from '@angular/core';
import { TmdbService } from '../../../services/tmdb.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-movies-list',
  templateUrl: './list.component.html',
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ]
})
export class ListComponent implements OnInit {
  @Input() endpoint: string = '';
  @Input() title: string = 'Listado de Películas';
  
  movies: any[] = [];
  isLoading: boolean = false;
  searchQuery: string = '';
  startDate: string = '';
  endDate: string = '';
  page =1;
  
  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    if (this.endpoint) {
      this.loadMovies();
    }
  }

  loadMovies(page: number = 1) {
    this.isLoading = true;
    console.log(this.endDate, this.endpoint, this.searchQuery)
    this.tmdbService.getMoviesList(this.endpoint, page, this.searchQuery, this.startDate, this.endDate).subscribe(
      (response: any) => {
        this.movies.push(...response.results);
        this.isLoading = false;
        console.log(response.results)
      },
      error => {
        console.error('Error al obtener películas:', error);
        this.isLoading = false;
      }
    );
  }

  applyFilters() {
    this.loadMovies();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      this.page++;
      this.loadMovies(this.page);
    }
  }
}
