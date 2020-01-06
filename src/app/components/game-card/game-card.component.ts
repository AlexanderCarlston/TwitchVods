import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { Game } from 'src/app/services/api.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game: Game;
  constructor(private router: Router, private store: Store) { }

  ngOnInit() {

  }

  validImgSrc(src: string) {
    return src.replace('{width}', '180').replace('{height}', '250');
  }

  navigateToVideos(gameId: string) {
    this.store.dispatch(new Navigate(['/videos-page', gameId]));
  }
}
