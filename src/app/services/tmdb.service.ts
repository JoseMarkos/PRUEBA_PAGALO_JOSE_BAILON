import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private API_URL = 'https://api.themoviedb.org/3'; // Cambié a 3 si usas la API V3
  private BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWFhNWU4NzQyODEzNzc2ZDE1ZDNhYTg5YmY0NDJjOSIsIm5iZiI6MTc0MzEyNTE0OS4yMzEsInN1YiI6IjY3ZTVmYTlkZThhMTkxMGU2NTEwZDRmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lf0s70O4RL8hQbD1IzNHhpKeeIt8BAfRg_5q7zmdDWE'; // Reemplaza con tu token Bearer

  constructor(private http: HttpClient) {}

  private createHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.BEARER_TOKEN}`,
    });
  }

  /**
     * Obtiene una lista de películas con filtros opcionales.
     * @param endpoint El endpoint específico (e.g., 'now_playing', 'top_rated')
     * @param page Número de página para la paginación
     * @param searchQuery Filtro por nombre de película
     * @param startDate Filtro por fecha de inicio
     * @param endDate Filtro por fecha de fin
     */
  getMoviesList(endpoint: string, page: number, searchQuery?: string, startDate?: string, endDate?: string) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('language', 'es-ES');

    // Si se pasa un nombre de película, añadir el filtro
    if (searchQuery) {
      params = params.set('query', searchQuery);
    }

    // Si se pasan fechas, añadir los filtros de fecha
    // if (startDate && endDate) {
    //   params = params.set('primary_release_date.gte', startDate)
    //                 .set('primary_release_date.lte', endDate);
    // }

    console.log(params.toString(), '' , `${this.API_URL}/movie/${endpoint}?${params.toString()}`)
    return this.http.get(`${this.API_URL}/movie/${endpoint}?${params.toString()}`, {
      headers: this.createHeaders(),
      params: params
    });
  }

  /**
   * Obtiene las películas actuales en cartelera.
   * @param page Número de página para la paginación
   * @param searchQuery Filtro por nombre de película
   * @param startDate Filtro por fecha de inicio
   * @param endDate Filtro por fecha de fin
   */
  getNowPlaying(page: number, searchQuery?: string, startDate?: string, endDate?: string) {
    return this.getMoviesList('now_playing', page, searchQuery, startDate, endDate);
  }

  /**
   * Obtiene las películas más votadas.
   * @param page Número de página para la paginación
   * @param searchQuery Filtro por nombre de película
   * @param startDate Filtro por fecha de inicio
   * @param endDate Filtro por fecha de fin
   */
  getTopRated(page: number, searchQuery?: string, startDate?: string, endDate?: string) {
    return this.getMoviesList('top_rated', page, searchQuery, startDate, endDate);
  }

  getMovieById(id: string) {
    return this.http.get(`${this.API_URL}/movie/${id}`, {
      headers: this.createHeaders(),
      params: { language: 'es' }
    });
  }  
}
