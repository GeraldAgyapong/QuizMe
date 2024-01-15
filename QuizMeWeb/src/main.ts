// Import necessary method from Angular for bootstrapping
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import the root module of the Angular application
import { AppModule } from './app/app.module';

// Bootstrap the Angular application with the specified root module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Catch and log any potential errors during bootstrap
