import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Environment } from '../dao/environment';

@Injectable()
export class EnvSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Environment[]> {
    return this.http
      .get(`api/envs/?host=${term}`)
      .map(response => response.json().data as Environment[]);
  }
}
