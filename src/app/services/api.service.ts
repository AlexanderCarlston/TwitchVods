import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export interface TwitchResult<T> {
  data: Array<T>;
}

export interface User {
  id: string;
  user_id: string;
  profile_image_url: string;
}

export interface Stream {
  id: string;
}

export interface Game {
  name: string;
}

@Injectable()
export class ApiService {
  baseUrl = 'https://api.twitch.tv/helix/';
  clientHeader = { 'Client-ID': 'yne9spn35mh0j47wtp05g367bpu9pe' };
  constructor(
    private http: HttpClient
  ) { }

  getTopGames(): Observable<TwitchResult<Game>> {
    return this.http.get<TwitchResult<Game>>(this.baseUrl + 'games/top?limit=13', { headers: this.clientHeader });
  }

  getVideosForGame(gameId: string): Observable<TwitchResult<Game>> {
    return this.http.get<TwitchResult<Game>>(this.baseUrl + `videos?game_id=${gameId}`, { headers: this.clientHeader });
  }

  getStreams() {
    return this.http.get<TwitchResult<Stream>>(this.baseUrl + 'streams?first=10', { headers: this.clientHeader });
  }

  getUser(userId: string) {
    return this.http.get<TwitchResult<User>>(this.baseUrl + `users?id=${userId}`, { headers: this.clientHeader });
  }
}
