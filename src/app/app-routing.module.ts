import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnvsComponent }      from './envs.component';
import { EnvDetailComponent }  from './env-detail.component';
import {
  CurrentEnvComponent,
  GAEnvComponent,
  OpenEnvComponent,
  PreviousEnvComponent,
  RetiredEnvComponent
} from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/current-development-environments', pathMatch: 'full' },
  { path: 'current-development-environments',  component: CurrentEnvComponent },
  { path: 'previous-release-environments',  component: PreviousEnvComponent },
  { path: 'open-releases',  component: OpenEnvComponent },
  { path: 'ga-releases',  component: GAEnvComponent },
  { path: 'servers-to-be-retired',  component: RetiredEnvComponent },
  { path: 'detail/:id', component: EnvDetailComponent },
  { path: 'all-environments',     component: EnvsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
