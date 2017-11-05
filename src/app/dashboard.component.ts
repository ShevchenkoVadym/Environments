import { Component, OnInit } from '@angular/core';

import { Environment } from './environment';
import { EnvService } from './env.service';


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  envs: Environment[] = [];

  constructor(private envService: EnvService) { }

  ngOnInit(): void {
    this.envService.getEnvs()
      .then(envs => this.envs = envs.slice(1, 5));
  }
}
