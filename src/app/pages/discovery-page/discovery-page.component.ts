import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

export interface twitchResult {
  data: Array<object>;
}

@Component({
  selector: 'app-discovery-page',
  templateUrl: './discovery-page.component.html',
  styleUrls: ['./discovery-page.component.scss'],
})
export class DiscoveryPageComponent implements OnInit {
  topGames: object[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTopGames()
    .subscribe(data => {
      data.data.pop();
      this.topGames = data.data
    });
  }

}
