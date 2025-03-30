import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private API_URL = 'https://api.themoviedb.org/4';
  private API_KEY = '81aa5e8742813776d15d3aa89bf442c9'; // Reemplaza con tu clave de TMDb

  constructor(private http: HttpClient) {}

  getNowPlaying(page: number) {
    return this.http.get(`${this.API_URL}/movie/now_playing`, {
      params: { api_key: this.API_KEY, page: page.toString(), language: 'es' },
    });
  }

  getTopRated(page: number) {
    return this.http.get(`${this.API_URL}/movie/top_rated`, {
      params: { api_key: this.API_KEY, page: page.toString(), language: 'es' },
    });
  }
}
