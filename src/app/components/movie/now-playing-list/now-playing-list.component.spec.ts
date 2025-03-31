import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingListComponent } from './now-playing-list.component';

describe('NowPlayingListComponent', () => {
  let component: NowPlayingListComponent;
  let fixture: ComponentFixture<NowPlayingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowPlayingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NowPlayingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
