import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav>
      <a routerLink="/current-development-environments">Current Development</a>
      <a routerLink="/previous-release-environments">Previous Release Environments</a>
      <a routerLink="/open-releases">Open Releases</a>
      <a routerLink="/ga-releases">GA'ed Releases</a>
      <a routerLink="/servers-to-be-retired">Servers to be Retired</a>
      <a routerLink="/all-environments">All Environments</a>
    </nav>
    <router-outlet></router-outlet>

 
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent  {
}
