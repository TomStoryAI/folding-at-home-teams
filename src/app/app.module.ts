import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppMaterialModule } from './app-material.module';
import { ChallengesComponent } from './pages/challenges/challenges.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MostActivityComponent } from './challenges/most-activity/most-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
    NotFoundComponent,
    MostActivityComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
