import { Component, OnInit } from '@angular/core';

import { Environment } from './dao/environment';
import { EnvService } from './services/env.service';

@Component({
  selector: 'my-filtered-envs',
  templateUrl: './templates/dashboard.component.html',
  styleUrls: [ './styles/dashboard.component.css' ]
})

export abstract class DashboardComponent implements OnInit {

  envs: Environment[] = [];
  selectedEnv: Environment;

  constructor(public envService: EnvService) { }

  ngOnInit(): void {
    this.envService.getEnvs()
      .then(envs => this.envs = envs.filter(env => env.type === this.getType()));
  }

  delete(env: Environment): void {
    this.envService
      .delete(env.id)
      .then(() => {
        this.envs = this.envs.filter(e => e !== env);
        if (this.selectedEnv === env) { this.selectedEnv = null; }
      });
  }

  abstract getType(): string;
  abstract getTitle(): string;
}

export class CurrentEnvComponent extends DashboardComponent implements OnInit {

  getType(): string {
    return 'current_development_env';
  }

  getTitle(): string {
    return 'Current Development & PT Environments';
  }
}

export class PreviousEnvComponent extends DashboardComponent implements OnInit {

  getType(): string {
    return 'previous_release_environments';
  }

  getTitle(): string {
    return 'Previous Release Environments';
  }
}

export class OpenEnvComponent extends DashboardComponent implements OnInit {

  getType(): string {
    return 'open_releases';
  }

  getTitle(): string {
    return 'Open Releases';
  }
}

export class GAEnvComponent extends DashboardComponent implements OnInit {

  getType(): string {
    return 'ga_releases';
  }

  getTitle(): string {
    return 'GA\'ed Releases';
  }
}

export class RetiredEnvComponent extends DashboardComponent implements OnInit {

  getType(): string {
    return 'servers_to_be_retired';
  }

  getTitle(): string {
    return 'Servers to be Retired';
  }
}


