import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core'; // ✅ Required for forms/common modules

// Only if you're using routing:
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Make sure this file exists and is correct

// Required modules
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes), // ✅ Optional, only if using routing
    importProvidersFrom(
      FormsModule,
      CommonModule
    )
  ]
}).catch(err => console.error(err));
