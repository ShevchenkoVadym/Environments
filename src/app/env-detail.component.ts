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
  constructor(
    private envService: EnvService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
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

}

