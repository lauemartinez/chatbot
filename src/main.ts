/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideMarkdown } from 'ngx-markdown';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
    providers: [provideProtractorTestingSupport(), provideMarkdown(), provideHttpClient()]
  })
  .catch(err => console.error(err));
