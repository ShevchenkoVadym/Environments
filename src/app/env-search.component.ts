import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { EnvSearchService } from './services/env-search.service';
import { Environment } from './dao/environment';

@Component({
  selector: 'env-search',
  templateUrl: './templates/env-search.component.html',
  styleUrls: [ './styles/env-search.component.css' ],
  providers: [EnvSearchService]
})
export class EnvSearchComponent implements OnInit {
  envs: Observable<Environment[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private envSearchService: EnvSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.envs = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.envSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Environment[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Environment[]>([]);
      });
  }

  gotoDetail(env: Environment): void {
    let link = ['/detail', env.id];
    this.router.navigate(link);
  }
}
