import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { DiscoveryPageComponent } from './pages/discovery-page/discovery-page.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { ApiService } from './services/api.service';
import { UserSideNavComponent } from './components/user-side-nav/user-side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    DiscoveryPageComponent,
    VideoCardComponent,
    GameCardComponent,
    VideosPageComponent,
    UserSideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([
      
    ], {
      developmentMode: !environment.production
    }),
    NgxsRouterPluginModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
