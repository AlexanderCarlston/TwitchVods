import { Component, OnInit, Input } from '@angular/core';
import { ApiService, User, UserData, Game } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-side-nav',
  templateUrl: './user-side-nav.component.html',
  styleUrls: ['./user-side-nav.component.scss']
})
export class UserSideNavComponent implements OnInit {
  @Input() user: User;
  userData: UserData;
  gameData: Game;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUser(this.user.user_id).subscribe(value => {
      this.userData = value.data[0];
    });
    this.apiService.getGame(this.user.game_id).subscribe(value => {
      this.gameData = value.data[0];
    });
  }

}
