import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DpLogoComponent } from './dp-logo/dp-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    PortfolioComponent,
    DpLogoComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }