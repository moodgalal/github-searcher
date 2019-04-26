import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({

  selector: 'my-app',
  template: `
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Github Searcher</a>
        </div>
    </div>
</nav>
<div class="container"><my-profile></my-profile></div>`,
})
export class AppComponent
{
  constructor(private gitService : GithubService){}
}
