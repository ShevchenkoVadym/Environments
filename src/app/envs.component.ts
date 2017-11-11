import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Environment } from './environment';
import { EnvService } from './env.service';

@Component({
  selector: 'my-envs',
  templateUrl: './envs.component.html',
  styleUrls: [ './envs.component.css' ],
  providers: [ EnvService ]
})

export class EnvsComponent implements OnInit {
  envs: Environment[];
  selectedEnv: Environment;

  constructor(
    private router: Router,
    private envService: EnvService) { }

  onSelect(environment: Environment): void {
    this.selectedEnv = environment;
  }

  getEnvs(): void {
    this.envService.getEnvs().then(envs => this.envs = envs);
  }

  ngOnInit(): void {
    this.getEnvs();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedEnv.id]);
  }

  add(host: string): void {
    host = host.trim();
    if (!host) { return; }
    this.envService.create(host)
      .then(env => {
        this.envs.push(env);
        this.selectedEnv = null;
      });
  }

  delete(env: Environment): void {
    this.envService
      .delete(env.id)
      .then(() => {
        this.envs = this.envs.filter(e => e !== env);
        if (this.selectedEnv === env) { this.selectedEnv = null; }
      });
  }
}





