import { Component, HostListener, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
})
export class MoviesListComponent implements OnInit {
  nowPlaying: any[] = [];
  topRated: any[] = [];
  nowPlayingPage = 1;
  topRatedPage = 1;
  isLoading = false;

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.loadNowPlaying();
    this.loadTopRated();
  }

  loadNowPlaying() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.tmdbService.getNowPlaying(this.nowPlayingPage).subscribe((res: any) => {
      this.nowPlaying.push(...res.results);
      this.nowPlayingPage++;
      this.isLoading = false;
    });
  }

  loadTopRated() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.tmdbService.getTopRated(this.topRatedPage).subscribe((res: any) => {
      this.topRated.push(...res.results);
      this.topRatedPage++;
      this.isLoading = false;
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      this.loadNowPlaying();
      this.loadTopRated();
    }
  }
}
