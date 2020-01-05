import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoveryPageComponent } from './pages/discovery-page/discovery-page.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/discovery', pathMatch: 'full'
  }, 
  {
    path: 'discovery',
    component: DiscoveryPageComponent
  }, 
  {
    path: 'videos-page/:id',
    component: VideosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
