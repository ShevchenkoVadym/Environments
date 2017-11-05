import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Environment } from './environment';



@Injectable()
export class EnvService {
  private envsUrl = 'api/envs';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getEnvs(): Promise<Environment[]> {
    return this.http.get(this.envsUrl)
      .toPromise()
      .then(response => response.json().data as Environment[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getEnvsSlowly(): Promise<Environment[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getEnvs()), 2000);
    });
  }

  getEnv(id: number): Promise<Environment> {
    const url = `${this.envsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Environment)
      .catch(this.handleError);
  }

  update(env: Environment): Promise<Environment> {
    const url = `${this.envsUrl}/${env.id}`;
    return this.http
      .put(url, JSON.stringify(env), {headers: this.headers})
      .toPromise()
      .then(() => env)
      .catch(this.handleError);
  }

  create(host: string): Promise<Environment> {
    return this.http
      .post(this.envsUrl, JSON.stringify({host: host}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Environment)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.envsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
