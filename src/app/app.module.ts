import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }         from './app.component';
import { CurrentEnvComponent } from './dashboard.component';
import { PreviousEnvComponent } from './dashboard.component';
import { OpenEnvComponent } from './dashboard.component';
import { GAEnvComponent } from './dashboard.component';
import { RetiredEnvComponent } from './dashboard.component';
import { EnvDetailComponent }  from './env-detail.component';
import { EnvsComponent }      from './all-envs.component';
import { EnvService }          from './services/env.service';

import { AppRoutingModule }     from './app-routing.module';
import { EnvSearchComponent } from './env-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,

  ],
  declarations: [
    AppComponent,
    EnvDetailComponent,
    EnvsComponent,
    EnvSearchComponent,
    CurrentEnvComponent,
    PreviousEnvComponent,
    OpenEnvComponent,
    GAEnvComponent,
    RetiredEnvComponent,
  ],
  providers: [ EnvService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
