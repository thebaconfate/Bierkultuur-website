import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/*
to make the website multilingual
 https://stackoverflow.com/questions/41453748/angular-2-translation-change-language-in-application?noredirect=1&lq=1
*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
