import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tenUsers: object[];

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getStreams()
    .subscribe(value => this.tenUsers = value.data);
  }
}
