import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-top-rated-list',
  imports: [ListComponent],
  templateUrl: './top-rated-list.component.html',
  styleUrl: './top-rated-list.component.css'
})
export class TopRatedListComponent {

}
