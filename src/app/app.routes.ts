import { Routes } from '@angular/router';
import { ListComponent } from './components/movie/list/list.component';
import { NowPlayingListComponent } from './components/movie/now-playing-list/now-playing-list.component';
import { TopRatedListComponent } from './components/movie/top-rated-list/top-rated-list.component';

export const routes: Routes = [
    {
        'path' : 'en-cartelera',
        'component' : NowPlayingListComponent
    },
    {
        'path' : 'mas-populares',
        'component' : TopRatedListComponent
    },
];
