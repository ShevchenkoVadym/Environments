import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { EnvDetailComponent }  from './env-detail.component';
import { EnvsComponent }      from './envs.component';
import { EnvService }          from './env.service';

import { AppRoutingModule }     from './app-routing.module';
import { EnvSearchComponent } from './env-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EnvDetailComponent,
    EnvsComponent,
    EnvSearchComponent,
  ],
  providers: [ EnvService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
