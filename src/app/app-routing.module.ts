import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesComponent } from './pages/challenges/challenges.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ConsistencyComponent } from './pages/challenges/consistency/consistency.component';
import { PointsComponent } from './pages/challenges/points/points.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/challenges', pathMatch: 'full' },
  { path: 'challenges', component: ChallengesComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'consistency', component: ConsistencyComponent },
  { path: 'points', component: PointsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
