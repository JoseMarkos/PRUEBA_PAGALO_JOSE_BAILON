
import { Component, HostListener, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-now-playing-list',
  imports: [ListComponent],
  templateUrl: './now-playing-list.component.html',
  styleUrl: './now-playing-list.component.css'
})
export class NowPlayingListComponent {
}
