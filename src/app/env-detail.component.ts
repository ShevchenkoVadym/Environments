import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Environment } from './environment';
import { EnvService } from './env.service';


@Component({
  selector: 'env-detail',
  templateUrl: './env-detail.component.html',
  styleUrls: [ './env-detail.component.css' ]
})

export class EnvDetailComponent implements OnInit  {
  env: Environment;
  showAddNode: boolean;
  constructor(
    private envService: EnvService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.showAddNode = false;
    this.route.paramMap
      .switchMap((params: ParamMap) => this.envService.getEnv(+params.get('id')))
      .subscribe(env => this.env = env);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.envService.update(this.env)
      .then(() => this.goBack());
  }

  addNewNode() {
    this.env.nodes.push({id: 1014,
      host: 'test',
      host_type: 'test',
      hardware_name: 'test',
      hardware_cpu: 2,
      hardware_ram: 2,
      os: 'test',
      oracle_version: 'test',
      database_names: 'test' });
    this.envService.update(this.env);
    this.showAddNode = false;
  }


  showAddNodeAction() {
    this.showAddNode = true;
  }
}

